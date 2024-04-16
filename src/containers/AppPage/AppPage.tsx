import { HeaderMenu } from "../../components/HeaderMenu";
import { DataUploader } from "../../components/DataUploader";
import { Section } from "../../components/Section";
import { DescriptiveTable } from "../../components/DescriptiveTable";
import { PlotContainer } from "../../components/PlotContainer";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
  return (
    <div className={styles.appPageContainer}>
      <HeaderMenu />
      <Section>
        <DataUploader />
        <DescriptiveTable />
        <PlotContainer />
      </Section>
    </div>
  );
};
