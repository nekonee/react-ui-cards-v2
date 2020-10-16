import React, { Component } from 'react';
import { CryptoCard } from '../cards/CryptoCard';

import styles from './styles.module.scss'

export default {
    title: 'Cards',
    component: CryptoCard
};

export const FirstCard = () =>
<CryptoCard
  currencyName='Bitcoin'
  currencyPrice='$8850.32'
  icon={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png'/>}
  currencyShortName='BTC'
  trend='(8.54%) $563.47'
  trendDirection={1}
  chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
    />