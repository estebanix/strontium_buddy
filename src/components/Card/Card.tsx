import React, { useContext } from "react";
import { BoxRow } from "../BoxRow";
import { Context } from "../../context/Context";

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
  const { mapCurrentIndividual, setMapCurrentIndividual } = useContext(Context);

  const handleIndividual = (individual: string) => {
    setMapCurrentIndividual(individual);
  };

  return (
    <div
      className={`${styles.cardContainer} ${mapCurrentIndividual === title ? styles.activeIndividual: ""}`}
      onClick={() => handleIndividual(title)}
    >
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
