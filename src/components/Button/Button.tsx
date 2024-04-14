import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    colorVariant: 'primary' | 'secondary';
    reaction?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, colorVariant, reaction }) => {
    const buttonClass = colorVariant === 'primary' ? styles.primary : styles.secondary;

    return (
        <button className={`${styles.button} ${buttonClass}`} onClick={reaction}>
            {text}
        </button>
    );
};