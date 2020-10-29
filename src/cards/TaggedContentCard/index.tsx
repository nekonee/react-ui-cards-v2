import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { CardContent, ContentProps } from './CardContent';
import { CardOverlay, OverlayProps } from './CardOverlay';

import styles from './styles.module.scss';


type TaggedContentProps = ContentProps & OverlayProps & {
    href: string;
    [key: string] : any;
}

const TaggedContentCard: React.FC<TaggedContentProps> = ({
    className,
    href,
    thumbnail,
    title,
    description,
    tags,
    ...other
}) => <a className={styles['card-link']} href={href}>
        <Card
            className={cx(
                styles['tagged-content-card'],
                className
            )}
            { ...other }
        >
            <CardOverlay
                thumbnail={ thumbnail }
            />
            <CardContent
                thumbnail={ thumbnail} 
                title={ title }
                description={ description }
                tags={ tags }
            />
        </Card>
    </a>


export { TaggedContentCard };