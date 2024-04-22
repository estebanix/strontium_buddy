import { Footer } from "../../components/Footer";
import { HeaderMenu } from "../../components/HeaderMenu";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Footer />
    </div>
  );
};
