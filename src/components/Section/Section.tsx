import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  pt?: number;
  pb?: number;
}

export const Section: React.FC<SectionProps> = ({ children, pt, pb }) => {
  const sectionStyle = {
    paddingTop: `${pt}px`,
    paddingBottom: `${pb}px`,
  };

  return <div className={styles.sectionContainer} style={sectionStyle}>{children}</div>;
};
