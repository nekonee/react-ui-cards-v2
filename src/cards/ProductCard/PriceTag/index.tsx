import React from 'react';

import styles from './styles.module.scss';

type PriceProps = {
    price: string | number;
}


const PriceTag: React.FC<PriceProps> = ({
    price
}) => <div className={ styles['price-tag'] }>
        { price }
    </div>

export { PriceTag, PriceProps };