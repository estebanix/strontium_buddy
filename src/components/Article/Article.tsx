import React from 'react';
import styles from './Article.module.scss';

interface ArticleProps {
    title: string;
    text?: string;
}

export const Article: React.FC<ArticleProps> = ({ title, text }) => {

    return (
        <div className={styles.articleContainer}>
            <h2 className={styles.articleTitle}>{title}</h2>
            <p className={styles.articleParag}>{text}</p>
        </div>
    );
};