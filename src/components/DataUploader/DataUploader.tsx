import { Button } from "../Button";

import styles from "./DataUploader.module.scss";

export const DataUploader = () => {
    return (
        <div className={styles.dataUploaderContainer}>
            <Button text="Upload" colorVariant="secondary" />
        </div>   
    )
}