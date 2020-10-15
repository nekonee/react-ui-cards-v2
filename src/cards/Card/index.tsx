import React, { Children } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

type CardProps = {
    className?: string;
    float?: boolean;
    [key: string] : any;
}

const Card: React.FC<CardProps>= ({
    className,
    float=false,
    children,
    ...rest
    }) => <div
    className={
        classnames(
            styles.card,
            { [styles.float]: float },
            className,
        )
    }
    {...rest}
    >
        { children }
    </div>


export default Card;