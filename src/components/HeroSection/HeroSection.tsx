import { Image } from "../Image";
import logo from "./../../../public/images/earth.png";
import { BoxRow } from "../BoxRow";
import { Button } from "../Button";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroSectionBox}>
        <h1 className={styles.title}>SrVision</h1>
        <p className={styles.slogan}>Transforming Data into Discovery</p>
        <p className={styles.subtitle}>
          Simplifying Isotopic Analysis for Everyone: Manage your isotopic data
          and create beautiful visualizations effortlessly.
        </p>
        <BoxRow gapWidth={30}>
          <Button text="Get started" colorVariant="primary" />
          <Button
            text="GitHub"
            colorVariant="secondary"
            link={"https://github.com/estebanix/strontium_buddy"}
          />
        </BoxRow>
      </div>
      <Image src={logo} size={400} />
    </div>
  );
};
