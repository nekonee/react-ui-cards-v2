import React from 'react';

import { FlippingCard } from '../cards/FlippingCard';
import { FlippingCardBack } from '../cards/FlippingCard/FlippingCardBack';
import { FlippingCardFront } from '../cards/FlippingCard/FlippingCardFront';

export default {
    title: 'Cards/Flipping card',
    component: 'Flipping Card'
}

export const FirstCard = () => <FlippingCard>
<FlippingCardBack>
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.imgur.com/wjbYGNv.jpg)'
    }}>
  </div>
</FlippingCardBack>
<FlippingCardFront>
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.imgur.com/3sKjY8V.jpg)'
    }}>
  </div>
</FlippingCardFront>
</FlippingCard>

export const SecondCard = () => <FlippingCard>
<FlippingCardBack>
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.imgur.com/m0GnZH3.jpg)'
    }}>
  </div>
</FlippingCardBack>
<FlippingCardFront>
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.imgur.com/E1jz6WQ.jpg)'
    }}>
  </div>
</FlippingCardFront>
</FlippingCard>


export const ThirdCard = () => <FlippingCard>
<FlippingCardBack>
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.imgur.com/1abAoUz.jpg)'
    }}>
  </div>
</FlippingCardBack>
<FlippingCardFront>
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://i.imgur.com/UjbK2Wb.png)'
    }}>
  </div>
</FlippingCardFront>
</FlippingCard>

