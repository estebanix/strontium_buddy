import { Footer } from "../../components/Footer";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Container } from "../../components/Container";
import { Article } from "../../components/Article";
import { Image } from "../../components/Image";
import logo from "./../../../public/images/neologo.png";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
        <Container>
          <Article title="SrVision" text="Simplify Strontium: Unleash the Power of Isotope Analysis!" />
          <Image src={logo} size={500} />
        </Container>
      </Section>
      <Footer />
    </div>
  );
};
