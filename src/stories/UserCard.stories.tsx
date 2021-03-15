import React from 'react';

import { UserCard } from '../cards/UserCard';

export default {
    title: 'Cards/ User card',
    component: "UserCard"
}

export const FirstCard = () => <UserCard
    float
    header='https://i.imgur.com/w5tX1Pn.jpg'
    avatar='https://i.imgur.com/uDYejhJ.jpg'
    name='Justin Case'
    positionName='Software Developer'
    stats={[
        {
            name: 'followers',
            value: 21
        },
        {
            name: 'following',
            value: 37
        },
        {
            name: 'posts',
            value: 117
        }
    ]}
/>


export const SecondCard = () => <UserCard
    float
    href='https://github.com/nekonee'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar='https://i.imgur.com/XJxqvsU.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/>


export const ThirdCard = () => <UserCard
    float
    href='https://github.com/nekonee'
    header='https://i.imgur.com/p5yXGQk.jpg'
    avatar='https://i.imgur.com/kFkyYkZ.jpg'
    name='Joseph Cheps'
    positionName='Firmware Engineer'
    stats={[
        {
            name: 'commits',
            value: 365
        },
        {
            name: 'stars',
            value: 110
        },
        {
            name: 'repositories',
            value: 54
        }
    ]}
/>