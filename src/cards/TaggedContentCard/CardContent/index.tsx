import React from 'react';

import styles from './styles.module.scss';

type ContentProps = {
    thumbnail: string;
    title: string;
    description: string;
    tags: string[];
}

const CardContent: React.FC<ContentProps> = ({
    thumbnail,
    title,
    description,
    tags
}) => <div
    className={ styles['card-content'] }
>
        <div className={ styles['thumbnail'] }>
            <img src={ thumbnail } />
        </div>

        <div className={ styles['text'] }>
            <div className={ styles['title'] }>
                { title }
            </div>
            <div className={ styles['description'] }>
                { description }
            </div>
            <div className={ styles['tags'] }>
                {
                    tags.map((tag, i) => {
                        return (
                            <span className={ styles['tag'] }>
                                { typeof tag === "function" ? tag() : tag }
                            </span>
                        );
                    })
                }
            </div>
        </div>
    </div>

export { CardContent, ContentProps };