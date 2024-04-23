import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";
import { BoxRow } from "../BoxRow";
import { Image } from "../Image";
import headerLogo from "./../../../public/images/React-icon.svg.png";

import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuContainer}>
      <BoxRow gapWidth={15}>
        <Image src={headerLogo} />
        <h4>SrBuddy</h4>
      </BoxRow>
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
