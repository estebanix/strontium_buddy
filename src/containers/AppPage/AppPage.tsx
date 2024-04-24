import { HeaderMenu } from "../../components/HeaderMenu";
import { DataUploader } from "../../components/DataUploader";
import { Section } from "../../components/Section";
import { DescriptiveTable } from "../../components/DescriptiveTable";
import { PlotContainer } from "../../components/PlotContainer";
import { Container } from "../../components/Container";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { ColumnRender } from "../../components/ColumnRender";
import { MapPlot } from "../../components/MapPlot";
import { Footer } from "../../components/Footer";
import { data as dataMap } from "../HomePage/data";

import styles from "./AppPage.module.scss";

export const AppPage = () => {
  const { data, mapCurrentIndividual } = useContext(Context);

  console.log(mapCurrentIndividual);
  return (
    <div className={styles.appPageContainer}>
      <HeaderMenu />
      <Section>
        <DataUploader />
        {data.length > 0 && (
          <>
            <DescriptiveTable />
            <PlotContainer />
            <Container border={true}>
              <ColumnRender renderData={data} dynamic={true} />
              <MapPlot data={dataMap} width={350} height={350} />
            </Container>
          </>
        )}
      </Section>
      <Footer />
    </div>
  );
};
