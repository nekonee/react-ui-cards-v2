import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { TitleLine } from './TitleLine';
import { IconLine } from './IconLine';
import { CryptoChart } from './CryptoChart';

import styles from './styles.module.scss';

type CryptoProps = TitleLine & IconLine & CryptoChart & {
    className: string;
    [key: string] : any;
}

const CryptoCard: React.FC<CryptoProps> = ({
    currencyName= 'Coin',
    currencyPrice= '0',
    icon,
    currencyShortName,
    trend,
    trendDirection,
    chartColor,
    chartData,
    ...other
}) => <Card className={ cx(styles['crypto-card']) } 
    { ...other }
    >
    <TitleLine 
    currencyName= { currencyName }
    currencyPrice= { currencyPrice }
    />
    <IconLine 
    icon= { icon }
    currencyShortName= { currencyShortName }
    trend= { trend }
    trendDirection= {trendDirection }
    />
    <CryptoChart 
    chartColor= { chartColor }
    chartData= { chartData }
    />
</Card>

export { CryptoCard };