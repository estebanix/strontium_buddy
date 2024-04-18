import { DropDown } from "../DropDown/DropDown";
import { BarChart } from "../Plots/BarChart";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { PieChart } from "../Plots/PieChart";
import { BoxRow } from "../BoxRow";
import { groupByOptions, plotOptions } from "../../utils/constans/plotOptions";

import styles from "./PlotContainer.module.scss";

export const PlotContainer = () => {
  const { currentGroupBy, currentPlot } = useContext(Context);

  return (
    <div className={styles.plotContainerContainer}>
      <BoxRow gapWidth={50}>
        <DropDown options={groupByOptions} />
        <DropDown options={plotOptions} />
      </BoxRow>
      {currentGroupBy && currentPlot === "bar" && (
        <BarChart width={500} height={350} />
      )}
      {currentGroupBy && currentPlot === "pie" && (
        <PieChart width={350} height={350} />
      )}
    </div>
  );
};
