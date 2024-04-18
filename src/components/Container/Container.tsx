import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children?: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.containerContainer}>{children}</div>;
};
