import { DropDown } from "../DropDown/DropDown";
import { BarChart } from "../Plots/BarChart";

import styles from "./PlotContainer.module.scss";

export const PlotContainer = () => {
    return(
        <div className={styles.plotContainerContainer}>
            <DropDown />
            <BarChart width={500} height={350} />
        </div>
    )
}