import { ReactNode } from "react";
import styles from "./Box.module.scss";

interface BoxProps {
    children?: ReactNode;
}

export const Box: React.FC <BoxProps> = ({children}) => {
    return (
        <div className={styles.boxContainer}>
            {children}
        </div>
    )
}