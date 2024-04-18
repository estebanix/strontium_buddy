import { HeaderMenu } from "../../components/HeaderMenu";
import { DataUploader } from "../../components/DataUploader";
import { Section } from "../../components/Section";
import { DescriptiveTable } from "../../components/DescriptiveTable";
import { PlotContainer } from "../../components/PlotContainer";
import { Container } from "../../components/Container";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { ColumnRender } from "../../components/ColumnRender";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
  const { data } = useContext(Context);
  return (
    <div className={styles.appPageContainer}>
      <HeaderMenu />
      <Section>
        <DataUploader />
        {data.length > 0 && (
          <>
            <DescriptiveTable />
            <PlotContainer />
          </>
        )}
        <Container>
          <ColumnRender renderData={data} />
        </Container>
      </Section>
    </div>
  );
};
