import { DropDown } from "../DropDown/DropDown";
import { BarChart } from "../Plots/BarChart";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { PieChart } from "../Plots/PieChart";
import { groupByOptions, plotOptions } from "../../utils/constans/plotOptions";

import styles from "./PlotContainer.module.scss";

export const PlotContainer = () => {
  const { currentGroupBy, currentPlot } = useContext(Context);

  return (
    <div className={styles.plotContainerContainer}>
      <DropDown options={groupByOptions} />
      <DropDown options={plotOptions} />
      {currentGroupBy && currentPlot === "bar" && <BarChart width={500} height={350} />}
      {currentGroupBy && currentPlot === "pie" && <PieChart width={200} height={200} />}
    </div>
  );
};
