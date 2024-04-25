import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
        <p>Developed by <a href="https://samuelkertes.cz/">Samuel Kertés</a></p>
        </div>
    )
}