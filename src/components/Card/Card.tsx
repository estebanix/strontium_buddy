import React, { useContext, useEffect } from "react";
import { BoxColumn } from "../BoxColumn";
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
  const { mapCurrentIndividual, setMapCurrentIndividual } = useContext(
    Context
  );

  const handleIndividual = (individual: string) => {
    if (mapCurrentIndividual === individual) {
      setMapCurrentIndividual("");
    } else {
      setMapCurrentIndividual(individual);
    }
  };

  const isActive = mapCurrentIndividual === title;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.cardContainer}`)) {
        setMapCurrentIndividual("");
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [setMapCurrentIndividual]);

  return (
    <div
      className={`${styles.cardContainer} ${
        isActive ? styles.activeIndividual : ""
      }`}
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
