import * as d3 from "d3";
import { FeatureCollection } from "geojson";

import styles from "./MapPlot.module.scss";

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};

export const MapPlot = ({ width, height, data }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width)
    .center([60, 48]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = data.features
    .filter((shape) => shape.id !== "ATA")
    .map((shape) => {
      return (
        <path
          key={shape.id}
          className={styles.shape}
          d={geoPathGenerator(shape)}
          stroke="black"
          strokeWidth={0.5}
          fill="#6f777d"
          fillOpacity={0.7}
        />
      );
    });

  return (
    <div className={styles.mapPlotContainer}>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
    </div>
  );
};
