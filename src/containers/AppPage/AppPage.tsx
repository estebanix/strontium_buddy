import { HeaderMenu } from "../../components/HeaderMenu";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
  return (
    <div className={styles.appPageContainer}>
      <HeaderMenu />
      <Section>
        <Button text="Click" colorVariant="secondary" />
      </Section>
    </div>
  );
};
