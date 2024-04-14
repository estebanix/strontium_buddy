import { Button } from "../Button";
import { useState } from "react";
import * as XLSX from "xlsx";

import styles from "./DataUploader.module.scss";

export const DataUploader = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  }

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
  }

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
