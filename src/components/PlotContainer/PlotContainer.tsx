import { DropDown } from "../DropDown/DropDown";
import { BarChart } from "../Plots/BarChart";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { PieChart } from "../Plots/PieChart";

import styles from "./PlotContainer.module.scss";

export const PlotContainer = () => {
    const { currentGroupBy } = useContext(Context);

    return (
        <div className={styles.plotContainerContainer}>
            <DropDown />
            {currentGroupBy && <BarChart width={500} height={350} />}
            <PieChart width={200} height={200} />
        </div>
    );
};
