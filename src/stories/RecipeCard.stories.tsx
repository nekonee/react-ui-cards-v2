import React from 'react';
import { RecipeCard } from '../cards/RecipeCard';

export default {
    title: 'Cards/Recipe card',
    component: 'RecipeCard'
};

export const FirstCard = () =>
    <RecipeCard
        href='https://github.com/nekonee'
        thumbnail='https://i.imgur.com/VkHTicg.jpg'
        title='Fluffy pancakes'
        time='0:30'
        servings='3-5'
        likeCallback={() => alert('You added Fluffy pancakes to favourites')}
    />


export const SecondCard = () =>
    <RecipeCard
        href='https://github.com/nekonee'
        thumbnail='https://i.imgur.com/0308iuN.jpg'
        title='Cupcakes'
        time='1:30'
        servings='4-6'
        likeCallback={() => alert('You added Cupcakes to favourites')}
    />


export const ThirdCard = () =>
    <RecipeCard
        href='https://github.com/nekonee'
        thumbnail='https://i.imgur.com/s9oR6BE.jpg'
        title='Macarons'
        time='2:00'
        servings='7-10'
        likeCallback={() => alert('You added Macarons to favourites')}
    />