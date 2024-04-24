import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";
import { BoxRow } from "../BoxRow";
import { Image } from "../Image";
import headerLogo from "./../../../public/images/neologo.png";

import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuContainer}>
        <Image src={headerLogo} size={40} />
        <h4>SrVision</h4>
      <div className={styles.headerOptionsBox}>
        <BoxRow gapWidth={30}>
          {headerMenuItems.map((item, index) => {
            return (
              <Link key={index} to={item.to} className={styles.headerMenuLink}>
                <p>{item.title}</p>
              </Link>
            );
          })}
        </BoxRow>
      </div>
    </div>
  );
};
