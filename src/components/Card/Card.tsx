import React from "react";
import { BoxRow } from "../BoxRow";

import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  sex: string;
  ageGroup?: string;
  srValue?: string | number;
}

export const Card: React.FC<CardProps> = ({
  title,
  sex,
  ageGroup,
  srValue,
}) => {
  return (
    <div className={styles.cardContainer}>
      <BoxRow gapWidth={20}>
        <p>{title}</p>
        <p>{sex}</p>
      </BoxRow>
      <BoxRow gapWidth={20}>
        <p>{ageGroup}</p>
        <p>{srValue}</p>
      </BoxRow>
    </div>
  );
};
