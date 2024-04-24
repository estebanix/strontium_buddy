import { Footer } from "../../components/Footer";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { HeroSection } from "../../components/HeroSection";
import homeCards from "./../../utils/constans/homeCards.json";

import styles from "./HomePage.module.scss";
import { Box } from "../../components/Box/Box";
import { Article } from "../../components/Article";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section pt={60}>
        <HeroSection />
        <div className={styles.cardsContainer}>
            {homeCards.map((card) => {
             return <Box>
              <Article title={card.title} text={card.description} icon={card.icon} />
             </Box>
            })}
        </div>
      </Section>
      <Footer />
    </div>
  );
};
