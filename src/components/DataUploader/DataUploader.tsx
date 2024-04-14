import { Button } from "../Button";
import { useContext, ChangeEvent, useEffect } from "react";
import { Context, DataRow } from "../../context/Context";
import * as XLSX from "xlsx";

import styles from "./DataUploader.module.scss";

export const DataUploader = () => {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    if (data.length > 0) {
      const sum = data.reduce((accumulator, current) => {
        const strontiumValue =
          parseFloat(current["Strontium Value"] as string) || 0;
        return accumulator + strontiumValue;
      }, 0);
      const mean = (sum / data.length).toFixed(4);
      console.log("Mean of Strontium Values:", mean);
    }
  }, [data]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files![0]);
    reader.onload = (e) => {
      const data = e.target!.result as string;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet) as DataRow[];
      setData(parsedData);
    };
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput")!.click();
  };

  const handleTableDisplay = () => {
    if (data.length > 0) {
      return (
        <table className={styles.table}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className={styles.dataUploaderContainer}>
      <input
        id="fileInput"
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />

      <Button
        colorVariant="secondary"
        text="Upload"
        reaction={handleButtonClick}
      />

      {handleTableDisplay()}
    </div>
  );
};
