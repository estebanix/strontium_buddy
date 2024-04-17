import React, { useContext } from "react";
import { Context } from "../../../context/Context";

interface PieChartProps {
  width: number;
  height: number;
}

export const PieChart: React.FC<PieChartProps> = ({ width, height }) => {
  const { data, currentGroupBy } = useContext(Context);

  const countByCategory: { [key: string]: number } = data.reduce((acc, item) => {
    const category = currentGroupBy?.value === "sex" ? item.Sex : item["Age Group"];
    acc[category] = (acc[category] || 0) + 1; // Ensure the value is numeric
    return acc;
  }, {} as { [key: string]: number });

  const categories = Object.keys(countByCategory);
  const total = Object.values(countByCategory).reduce((acc, value) => acc + value, 0);
  const barColors = currentGroupBy?.value === "sex" ? ["blue", "pink"] : ["green", "orange"];

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const startRadians = (startAngle - 90) * (Math.PI / 180);
    const endRadians = (endAngle - 90) * (Math.PI / 180);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const startX = x + radius * Math.cos(startRadians);
    const startY = y + radius * Math.sin(startRadians);
    const endX = x + radius * Math.cos(endRadians);
    const endY = y + radius * Math.sin(endRadians);
    const pathData = [
      `M ${x} ${y}`,
      `L ${startX} ${startY}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      "Z",
    ].join(" ");
    return pathData;
  };

  let startAngle = 0;
  const slices = categories.map((category, index) => {
    const value = countByCategory[category];
    const angle = (value / total) * 360;
    const endAngle = startAngle + angle;
    const path = describeArc(width / 2, height / 2, width / 2, startAngle, endAngle);
    startAngle = endAngle;
    return (
      <path key={index} d={path} fill={barColors[index % barColors.length]} />
    );
  });

  return <svg width={width} height={height}>{slices}</svg>;
};
