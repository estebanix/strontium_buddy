import { Button } from "../Button";
import { useContext, ChangeEvent, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { DataRow } from "../../utils/types/types";
import * as XLSX from "xlsx";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./DataUploader.module.scss";

export const DataUploader = () => {
  const { data, setData } = useContext(Context);
  const [pageNumber, setPageNumber] = useState(0);
  const rowsPerPage = 10;

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

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const renderTableRows = () => {
    const startIndex = pageNumber * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex).map((row, index) => (
      <tr key={index}>
        {Object.values(row).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  const pageCount = Math.ceil(data.length / rowsPerPage);

  return (
    <div className={styles.dataUploaderContainer}>
      {data.length == 0 && (
        <div className={styles.uploadBox}>
          <FontAwesomeIcon icon={faFileArrowUp} />
          <h1>Upload your data</h1>
          <input
            id="fileInput"
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />

          <Button
            colorVariant="secondary"
            text="Browse Files"
            reaction={handleButtonClick}
          />
        </div>
      )}

      {data.length > 0 && (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={styles.paginationContainer}
            activeClassName={styles.activePage}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            previousClassName={styles.paginationButton}
            nextClassName={styles.paginationButton}
            pageClassName={styles.paginationButton}
            breakClassName={styles.paginationButton}
            pageLinkClassName={styles.paginationLink}
            previousLinkClassName={styles.paginationLink}
            nextLinkClassName={styles.paginationLink}
          />
        </>
      )}
    </div>
  );
};
