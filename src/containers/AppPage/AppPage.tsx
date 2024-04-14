import { HeaderMenu } from "../../components/HeaderMenu";
import { Button } from "../../components/Button";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
    return (
        <div className={styles.appPageContainer}>
            <HeaderMenu />
            <Button text="Click" colorVariant="primary" />
            <Button text="Click" colorVariant="secondary" />
        </div>
    )
}