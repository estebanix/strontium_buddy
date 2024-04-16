import { DropDown } from "../DropDown/DropDown";

import styles from "./PlotContainer.module.scss";

export const PlotContainer = () => {
    return(
        <div className={styles.plotContainerContainer}>
            <DropDown />
        </div>
    )
}