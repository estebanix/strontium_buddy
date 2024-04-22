import { HeaderMenu } from "../../components/HeaderMenu";
import { SideMenu } from "../../components/SideMenu";
import { DocsContainer } from "./DocsContainer";
import { BoxRow } from "../../components/BoxRow";
import { Footer } from "../../components/Footer";

import styles from "./DocsPage.module.scss";

export const DocsPage = () => {
    return (
        <div className={styles.docsPageContainer}>
                <HeaderMenu />
                <BoxRow>
                    <SideMenu />
                    <DocsContainer />
                </BoxRow>
                <Footer />
        </div>
    );
}