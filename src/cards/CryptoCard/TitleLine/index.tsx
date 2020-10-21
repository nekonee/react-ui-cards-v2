import React from 'react';

import styles from './styles.module.scss';

type TitleProps = {
    currencyName: string;
    currencyPrice: string;
}

const TitleLine: React.FC<TitleProps> = ({
    currencyName,
    currencyPrice
}) => <div className={ styles['crypto-card-title-line'] }>
          <div className={ styles['currency-name']}>{ currencyName }</div>
          <div className={ styles['currency-price']}>{ currencyPrice }</div>
    </div>


export { TitleLine, TitleProps };