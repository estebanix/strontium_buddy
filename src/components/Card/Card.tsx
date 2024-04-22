import React, { useContext } from "react";
import { BoxColumn} from "../BoxColumn";
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

  const isActive = mapCurrentIndividual === title;

  return (
    <div
      className={`${styles.cardContainer} ${isActive ? styles.activeIndividual : ""}`}
      onClick={() => handleIndividual(title)}
    >
      <BoxColumn gapHeight={20}>
        <p>{title}</p>
        {isActive && (
          <>
            <p>Sex: {sex}</p>
            <p>Age group: {ageGroup}</p>
            <p>Sr value: {srValue}</p>
          </>
        )}
      </BoxColumn>
    </div>
  );
};
