import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    colorVariant: 'primary' | 'secondary';
    reaction?: () => void;
    link?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, colorVariant, reaction, link }) => {
    const buttonClass = colorVariant === 'primary' ? styles.primary : styles.secondary;

    const handleClick = () => {
        if (link) {
            window.location.href = link;
        } else if (reaction) {
            reaction();
        }
    };

    return (
        <button className={`${styles.button} ${buttonClass}`} onClick={handleClick}>
            {text}
        </button>
    );
};
