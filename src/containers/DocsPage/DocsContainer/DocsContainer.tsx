import { Context } from "../../../context/Context";
import { useContext } from "react";
import { Article } from "../../../components/Article";

import data from "./../../../utils/constans/try.json";
import styles from "./DocsContainer.module.scss";

interface DocsContainerProps {
  id: number;
}

export const DocsContainer: React.FC<DocsContainerProps> = () => {
  const { siteValue } = useContext(Context);
  const filteredData = data.find((dat) => dat.id === siteValue);

  return (
    <div className={styles.docsContainer}>
      {filteredData && (
        <Article title={filteredData.title} text={filteredData.content} />
      )}
    </div>
  );
};