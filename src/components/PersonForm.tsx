"use client";

import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  addPerson,
  updatePerson,
  setEditingPersonId,
} from "../redux/personSlice";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/page.module.scss";

export default function PersonForm() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const editingPersonId = useAppSelector(
    (state) => state.person.editingPersonId
  );
  const persons = useAppSelector((state) => state.person.persons);
  const [form] = Form.useForm();

  const onFinish = (values: { name: string; age: number }) => {
    if (editingPersonId) {
      dispatch(updatePerson({ id: editingPersonId, ...values }));
      dispatch(setEditingPersonId(null));
    } else {
      dispatch(addPerson({ id: uuidv4(), ...values }));
    }
    form.resetFields();
  };

  if (editingPersonId) {
    const editingPerson = persons.find((p) => p.id === editingPersonId);
    if (editingPerson) {
      form.setFieldsValue(editingPerson);
    }
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className={styles["person-form"]}
    >
      <Form.Item
        name="name"
        label={t("name")}
        rules={[{ required: true }]}
      >
        <Input placeholder={t("placeholderName")} />
      </Form.Item>

      <Form.Item
        name="age"
        label={t("age")}
        rules={[
          {
            required: true,
            type: "number",
            transform: (value) => Number(value),
          },
        ]}
      >
        <Input placeholder={t("placeholderAge")} />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        className={styles["button-bg-color"]}
      >
        {editingPersonId ? t("update") : t("submit")}{" "}
      </Button>
    </Form>
  );
}
