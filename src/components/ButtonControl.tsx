"use client";

import { useState } from "react";
import { Button, Row, Col, Space } from "antd";
import { useTranslation } from "react-i18next";
import styles from "../styles/buttonStyles.module.scss";

export default function ButtonControl() {
  const { t } = useTranslation();
  const [rotationStep, setRotationStep] = useState(0);
  const [marginStep, setMarginStep] = useState(0);
  const [position, setPosition] = useState<"top" | "bottom">("top");

  const rotations = [
    styles["rotate-0"],
    styles["rotate-90"],
    styles["rotate-180"],
    styles["rotate-270"],
  ];

  const margins = [
    styles["margin-0-0"],
    styles["margin-50-50"],
    styles["margin-100-100"],
  ];

  const handleMoveShape = () => {
    setRotationStep((prev) => (prev + 1) % rotations.length);
  };

  const handleMovePosition = () => {
    setPosition((prev) => (prev === "top" ? "bottom" : "top"));
  };

  const handleRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * margins.length);
    setMarginStep(randomIndex);
  };

  const RenderButton = () => (
    <Button
      type="primary"
      className={`${styles.shapeButton} ${rotations[rotationStep]} ${margins[marginStep]}`}
      onClick={handleRandomPosition}
    >
      {"------->"}
    </Button>
  );

  return (
    <div className={styles.controlContainer}>
      {position === "top" && (
        <div className={styles.shapeButtonArea}>
          <RenderButton />
        </div>
      )}

      <Space direction="horizontal" size="middle">
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <Button
              type="primary"
              className={styles.controlButton}
              onClick={handleMoveShape}
            >
              {t("moveShape")}
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              className={styles.controlButton}
              onClick={handleMovePosition}
            >
              {t("movePosition")}
            </Button>
          </Col>
        </Row>
      </Space>

      {position === "bottom" && (
        <div className={styles.buttonArea}>
          <RenderButton />
        </div>
      )}
    </div>
  );
}
