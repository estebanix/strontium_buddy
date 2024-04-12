import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";

import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuContainer}>
      <div className={styles.headerMenuItemBox}>
        {headerMenuItems.map((item, index) => {
          return (
            <Link key={index} to={item.to} className={styles.headerMenuLink}>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
