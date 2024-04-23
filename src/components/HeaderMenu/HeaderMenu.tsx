import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";
import { BoxRow } from "../BoxRow";

import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuContainer}>
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
  );
};
