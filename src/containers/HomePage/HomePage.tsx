import { HeaderMenu } from "../../components/HeaderMenu";
import { MapPlot } from "../../components/MapPlot";

import {data} from "./data";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <MapPlot data={data} width={450} height={90} />
    </div>
  );
};
