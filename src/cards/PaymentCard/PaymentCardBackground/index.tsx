import React from 'react';
import cx from 'classnames';

import { ReactComponent as WorldMap } from '../svg/world-map.svg';
import { ReactComponent as Triangles } from '../svg/triangles.svg';
import { ReactComponent as Spiral } from '../svg/spiral.svg';
import styles from './styles.module.scss';

const patterns = {
    WorldMap,
    Triangles,
    Spiral
};


export type BackgroundProps = {
    background: string;
    backgroundPattern: keyof typeof patterns | null;
}

const PaymentCardBackground: React.FC<BackgroundProps> = ({
    background,
    backgroundPattern='WorldMap'
}) => {
    const Component = patterns[backgroundPattern];
    const defaultBg = 'linear-gradient( 135deg, #FF9D6C 10%, #BB4E75 100%)';

    console.log({Component})

    return (
    <div className={styles['payment-card-background']} style={{ background: background || defaultBg }}>
        <Component />
    </div>
    )
}

export { PaymentCardBackground };