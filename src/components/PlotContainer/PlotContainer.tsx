import { DropDown } from "../DropDown/DropDown";
import { BarChart } from "../Plots/BarChart";
import { useContext } from "react";
import { Context } from "../../context/Context";

import styles from "./PlotContainer.module.scss";

export const PlotContainer = () => {
    const { currentPlot } = useContext(Context);

    return (
        <div className={styles.plotContainerContainer}>
            <DropDown />
            {currentPlot && <BarChart width={500} height={350} />}
        </div>
    );
};
