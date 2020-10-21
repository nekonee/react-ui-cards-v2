import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { TitleLine, TitleProps } from './TitleLine';
import { IconLine, IconProps } from './IconLine';
import { CryptoChart, CryptoChartProps } from './CryptoChart';

import styles from './styles.module.scss';

type CryptoProps = TitleProps & IconProps & CryptoChartProps & {
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