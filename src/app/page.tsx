"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd";
import "../i18n";
import styles from "../styles/page.module.scss";
import ButtonControl from "../components/ButtonControl";
import PersonForm from "../components/PersonForm";
import PersonTable from "../components/PersonTable";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState<"shape" | "crud">("crud");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.modeSwitcher}>
          <Space>
            <Button
              type="primary"
              onClick={() => setMode("crud")}
              className={`${styles["button-mode"]} ${
                mode === "crud"
                  ? styles["button-orange"]
                  : styles["button-green"]
              }`}
            >
              {t("crudMode")}
            </Button>
            <Button
              type="primary"
              onClick={() => setMode("shape")}
              className={`${styles["button-mode"]} ${
                mode === "shape"
                  ? styles["button-orange"]
                  : styles["button-green"]
              }`}
            >
              {t("shapeMode")}
            </Button>
          </Space>
        </div>

        <div className={styles.languageSwitcher}>
          <Space>
            <Button
              type="primary"
              className={`${styles.buttonEnglish} ${styles["button-green"]}`}
              onClick={() => changeLanguage("en")}
            >
              English
            </Button>
            <Button
              type="primary"
              className={`${styles.buttonThai} ${styles["button-green"]}`}
              onClick={() => changeLanguage("th")}
            >
              ภาษาไทย
            </Button>
          </Space>
        </div>
      </div>

      <div>
        {mode === "shape" && (
          <>
            <h1>{t("shapeMode")}</h1>
            <ButtonControl />
          </>
        )}

        {mode === "crud" && (
          <>
            <h1>{t("crudMode")}</h1>
            <div className={`${styles["crud-mode-background"]}`}>
              <PersonForm />
              <PersonTable />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
