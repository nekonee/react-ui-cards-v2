import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { NewsHeader } from './NewsHeader';
import { NewsHeaderBackground } from './NewsHeaderBackground';

import styles from './styles.module.scss';

type NewsCardProps = NewsHeader & NewsHeaderBackground & {
    className: string;
    href: string;
    [key: string] : any;
}

const NewsHeaderCard: React.FC<NewsCardProps> = ({
    className,
    href,
    thumbnail,
    title,
    author,
    date,
    tags,
    ...other
}) => <a href={href}>
        <Card className= { cx(styles['news-header-card'],
            className
          )}
        { ...other }
        >
        
        <NewsHeaderBackground
            thumbnail={ thumbnail }
        />
        
        <NewsHeader
            title={ title }
            author={ author }
            date={ date }
        tags={ tags }
        />
        </Card>
</a> 

export { NewsHeaderCard };