import styles from "./ColumnRender.module.scss";

interface RenderDataProps {
  renderData: {
    Individual: string;
    Sex: string;
    "Age Group": string;
    "Strontium Value": string | number;
  }[];
}

export const ColumnRender: React.FC<RenderDataProps> = ({ renderData }) => {
  console.log(renderData);
  return (
    <div className={styles.columnRenderContainer}>
      {renderData.map((dat, i) => {
        return (
          <div key={i} className={styles.columnRenderBox}>
            {dat["Strontium Value"]}
          </div>
        );
      })}
    </div>
  );
};
