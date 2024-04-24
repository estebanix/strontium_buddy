import { Footer } from "../../components/Footer";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { HeroSection } from "../../components/HeroSection";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
          <HeroSection />
      </Section>
      <Footer />
    </div>
  );
};
