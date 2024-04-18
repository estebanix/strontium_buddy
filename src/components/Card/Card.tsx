import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
    title: string;
    sex: string;
    ageGroup?: string;
    srValue?: string | number;
}

export const Card: React.FC <CardProps> = ({title, sex, ageGroup, srValue}) => {
    return (
        <div className={styles.cardContainer}>
            <p>{title}</p>
            <p>{sex}</p>
            <p>{ageGroup}</p>
            <p>{srValue}</p>
        </div>
    )
}