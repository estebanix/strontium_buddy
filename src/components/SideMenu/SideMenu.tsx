import { sideMenuItems } from "../../utils/constans/sideMenuItems";
import { useContext } from "react";
import { Context } from "../../context/Context";

import styles from "./SideMenu.module.scss";

export const SideMenu = () => {
    const {setSiteValue} = useContext(Context);

    const handle = (id : number) => {
        setSiteValue(id)
    }
    return (
        <div className={styles.sideMenuContainer}>
            {sideMenuItems.map((item, index) => {
                return <p onClick={() => handle(item.id)} className={styles.itemText} key={index}>{item.title}</p>
            })}
        </div>
    )
}