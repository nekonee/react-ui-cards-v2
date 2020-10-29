import React from 'react';

import styles from './styles.module.scss';

type OverlayProps = {
    thumbnail: string;
}

const CardOverlay: React.FC<OverlayProps> = ({
    thumbnail
}) => <div
    className={ styles['card-overlay'] }
>
        <div
            className={ styles['overlay'] }
            style={{
                backgroundImage: `url(${thumbnail})`
            }}
        />
    </div>

export { CardOverlay, OverlayProps };