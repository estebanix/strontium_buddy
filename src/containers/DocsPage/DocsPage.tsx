import { HeaderMenu } from "../../components/HeaderMenu";
import { SideMenu } from "../../components/SideMenu";

import styles from "./DocsPage.module.scss";

export const DocsPage = () => {
  return (
    <div className={styles.docsPageContainer}>
      <HeaderMenu />
      <SideMenu />
    </div>
  );
};
