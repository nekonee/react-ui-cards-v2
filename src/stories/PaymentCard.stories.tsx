import React from 'react';

import { PaymentCard } from '../cards/PaymentCard';

export default {
    title: 'Cards/Payment cards',
    component: 'PaymentCard'
}

export const FirstCard = () => <PaymentCard
issuerIcon='https://i.imgur.com/MulWZzk.png'
backgroundPattern='Spiral'
number='4445 8509 0753 1365'
date='12/18'
name='Jean Pierre Polnareff'
cvv='213'
/>

