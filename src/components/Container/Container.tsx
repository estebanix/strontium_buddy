import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children?: ReactNode;
  border?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, border }) => {
  const someStyle = {
    border: border ? "1px solid #3C3C4340" : "none"
  }
  return <div className={styles.containerContainer} style={someStyle}>{children}</div>;
};
