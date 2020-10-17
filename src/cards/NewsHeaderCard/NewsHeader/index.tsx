import React from 'react';

import styles from './styles.module.scss';

type HeaderProps = {
    title: string;
    author: string;
    date: Date | string;
    tags: string;
}

const NewsHeader: React.FC<HeaderProps> = ({
    title,
    author,
    date,
    tags
}) => <div className={styles['news-header']}>   
        <div className={ styles['title'] }>
        { title }
        </div>

        <div className={ styles['bottom'] }>
        <div className={ styles['author'] }>
            { author }
        </div>

        <div className={ styles['date'] }>
            { date }
        </div>
        </div>

        <div className={ styles['tags'] }>
        {
        tags && tags.map((tag, i) => {
            return (
            <span className={ styles['tag'] }>
                {typeof tag === "function" ? tag() : tag}
            </span>
            );
        })
        }
        </div>
    </div>


export { NewsHeader };