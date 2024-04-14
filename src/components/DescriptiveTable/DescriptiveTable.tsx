import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./DescriptiveTable.module.scss";

export const DescriptiveTable = () => {
    const { data } = useContext(Context);

    const strontiumValues = data.map((item) => parseFloat(item["Strontium Value"]));

    const min = Math.min(...strontiumValues);
    const max = Math.max(...strontiumValues);
    const mean = strontiumValues.reduce((acc, val) => acc + val, 0) / strontiumValues.length;
    const sortedValues = strontiumValues.sort((a, b) => a - b);
    const median = sortedValues.length % 2 === 0
        ? (sortedValues[sortedValues.length / 2 - 1] + sortedValues[sortedValues.length / 2]) / 2
        : sortedValues[Math.floor(sortedValues.length / 2)];
    const sd = Math.sqrt(strontiumValues.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / strontiumValues.length);

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Statistic</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Minimum</td>
                        <td>{min.toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>Maximum</td>
                        <td>{max.toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>Mean</td>
                        <td>{mean.toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>Median</td>
                        <td>{median.toFixed(4)}</td>
                    </tr>
                    <tr>
                        <td>Standard Deviation</td>
                        <td>{sd.toFixed(4)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
