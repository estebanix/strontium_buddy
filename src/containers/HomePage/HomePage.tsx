import { Footer } from "../../components/Footer";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { HeroSection } from "../../components/HeroSection";
import homeCards from "./../../utils/constans/homeCards.json";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section pt={60}>
        <HeroSection />
        <div className={styles.cardsContainer}>
            {homeCards.map((card) => {
             return <p>a</p>
            })}
        </div>
      </Section>
      <Footer />
    </div>
  );
};
