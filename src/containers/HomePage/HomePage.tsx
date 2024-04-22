import { HeaderMenu } from "../../components/HeaderMenu";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
    </div>
  );
};
