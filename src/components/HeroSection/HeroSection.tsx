import { Image } from "../Image";
import logo from "./../../../public/images/neologo.png";
import { BoxRow } from "../BoxRow";
import { BoxColumn } from "../BoxColumn";
import { Button } from "../Button";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <BoxColumn gapHeight={20}>
        <h1 className={styles.title}>SrVision</h1>
        <BoxRow gapWidth={30}>
          <Button text="Btn1" colorVariant="primary" />
          <Button text="Btn2" colorVariant="secondary" />
        </BoxRow>
      </BoxColumn>
      <Image src={logo} size={400} />
    </div>
  );
};
