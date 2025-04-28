"use client";

import { Table, Button, Space } from "antd";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { deletePerson, setEditingPersonId } from "../redux/personSlice";
import styles from "../styles/page.module.scss";
import { useEffect, useState } from "react";

export default function PersonTable() {
  const { t } = useTranslation();
  const persons = useAppSelector((state) => state.person.persons);
  const dispatch = useAppDispatch();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const columns = [
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("age"),
      dataIndex: "age",
      key: "age",
    },
    {
      title: t("action"),
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            className={styles["button-bg-color"]}
            onClick={() => dispatch(setEditingPersonId(record.id))}
          >
            {t("edit")}
          </Button>
          <Button danger onClick={() => dispatch(deletePerson(record.id))}>
            {t("delete")}
          </Button>
        </Space>
      ),
    },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <Table
      dataSource={persons}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 4 }}
    />
  );
}
