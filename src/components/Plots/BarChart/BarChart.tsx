import React, { useContext } from "react";
import { Context } from "../../../context/Context";

interface BarChartProps {
  width: number;
  height: number;
}

export const BarChart: React.FC<BarChartProps> = ({ width, height }) => {
  const { data, currentGroupBy } = useContext(Context);

  const countByCategory: { [key: string]: number } = data.reduce((acc, item) => {
    const category = currentGroupBy?.value === "sex" ? item.Sex : item["Age Group"];
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number }); 

  const categories = Object.keys(countByCategory);
  const maxCount = Math.max(...Object.values(countByCategory));
  const barColors = currentGroupBy?.value === "sex" ? ["blue", "pink"] : ["green", "orange"];
  const totalBarWidth = width / (categories.length + 1); 
  const barWidth = totalBarWidth * 0.8; 

  return (
    <svg width={width} height={height}>
      {categories.map((category, index) => (
        <g key={index} transform={`translate(${totalBarWidth * (index + 1)}, 0)`}>
          <rect
            x={-barWidth / 2}
            y={height - (height * countByCategory[category]) / maxCount}
            width={barWidth}
            height={(height * countByCategory[category]) / maxCount}
            fill={barColors[index % barColors.length]}
          />
          <text
            x={0}
            y={height + 20}
            textAnchor="middle"
            fontSize="12px"
          >
            {category}
          </text>
        </g>
      ))}
      <text x={width / 2} y={height + 40} textAnchor="middle" fontSize="16px">
        {currentGroupBy?.label}
      </text>
    </svg>
  );
};
