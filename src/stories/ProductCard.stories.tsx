import React from 'react';

import { ProductCard } from '../cards/ProductCard';

export default {
    title: 'Cards/Product card',
    component: 'ProductCard'
};

export const FirstCard = () => <ProductCard
    photos={[
        'https://i.imgur.com/jRVDeI8.jpg',
        'https://i.imgur.com/raPe27t.jpg',
        'https://i.imgur.com/IpEsYSH.jpg'
    ]}
    price='$99'
    productName='Headphones'
    description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
    buttonText='Add to cart'
    rating={3}
    url='https://github.com/nukeop'
/>


export const SecondCaes = () => <ProductCard
    photos={[
        'https://i.imgur.com/t7DTziH.jpg',
        'https://i.imgur.com/kA5lx6t.jpg',
        'https://i.imgur.com/cUsl6Gs.jpg'
    ]}
    price='$1.50'
    productName='Cupcake'
    description='Nullam velit leo, pulvinar non metus feugiat, pharetra ornare enim. Vivamus ac quam a purus venenatis fringilla.'
    rating={5}
    url='https://github.com/nukeop'
/>
