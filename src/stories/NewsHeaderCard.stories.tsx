import React from 'react';

import { NewsHeaderCard } from '../cards/NewsHeaderCard';

export default {
    title: 'Cards/News header cards',
    component: 'NewsHeaderCard'
};

export const FirstCard = () => <NewsHeaderCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/rLFk5nd.jpg'
    title='Polish mountaineers on the top'
    author='Daily Sport'
    date='Feb 2, 2018'
    tags={['nature', 'photo', () => (<i>component</i>)]}
/>

export const SecondCard = () => <NewsHeaderCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/1fk52PJ.jpg'
    title='Most poisonous dishes you must avoid'
    author='Daily Health'
    date='Jan 2, 2018'
/>

export const ThirdCard = () => <NewsHeaderCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/n5Wg2Po.jpg'
    title='Cool looking test tubes'
    author='Daily Science'
    date='Mar 2, 2018'
/>