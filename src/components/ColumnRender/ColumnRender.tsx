import { DataRow } from "../../utils/types/types";
import { Card } from "../Card";

import styles from "./ColumnRender.module.scss";

interface RenderDataProps {
  renderData: DataRow[];
  dynamic: boolean;
}

export const ColumnRender: React.FC<RenderDataProps> = ({
  renderData,
  dynamic,
}) => {
  return (
    <div className={styles.columnRenderContainer}>
      {renderData.map((dat, i) => {
        return (
          <Card
            key={i}
            title={dat.Individual}
            sex={dat.Sex}
            ageGroup={dat["Age Group"]}
            srValue={dat["Strontium Value"]}
            reactive={dynamic}
          />
        );
      })}
    </div>
  );
};
