import styles from "./BoxColumn.module.scss";
import { ReactNode } from "react";

interface BoxColumnProps {
    children: ReactNode;
    gapHeight?: number;
}

export const BoxColumn: React.FC<BoxColumnProps> = ({ children, gapHeight }) => {
    const choosedGap = {
        gap: gapHeight ? `${gapHeight}px` : '0',
    };

    return (
        <div className={styles.boxColumnContainer} style={choosedGap}>
            {children}
        </div>
    );
};