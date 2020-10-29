import { defaultCipherList } from 'constants';
import React from 'react';

import { TaggedContentCard } from '../cards/TaggedContentCard';

export default {
    title: 'Cards/Tagged content card',
    component: 'TaggedContentCard'
}

export const FirstCard = () => <TaggedContentCard
    href='https://github.com/nukeop'
    thumbnail='https://i.imgur.com/yCch7GN.jpg'
    title='Cheesecake'
    description='a cake with raspberries'
    tags={[
        'food',
        'cake',
        'fruits'
    ]}
/>



export const SecondCard = () => <TaggedContentCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/57I3RAq.jpg'
    title='Cupcakes'
    description='a bite-sized cake'
    tags={[
        'food',
        'cake',
        'icing'
    ]}
/>



export const ThirdCard = () => <TaggedContentCard
    href='https://github.com/nekonee'
    thumbnail='https://i.imgur.com/H0f0R6p.jpg'
    title='Burger'
    description='the cornerstone of every nutritious breakfast'
    tags={[
        'food',
        'sandwich',
        'meat'
    ]}
/>
