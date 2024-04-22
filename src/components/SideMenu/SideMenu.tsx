import { Card } from "../Card";

import styles from "./SideMenu.module.scss";
import { docs } from "../../utils/data/docs";

export const SideMenu = () => {
    return (
        <div className={styles.sideMenuContainer}>
            {docs.map((dat) => {
                return <Card title={dat.title} reactive={false} />
            })}
        </div>
    )
}