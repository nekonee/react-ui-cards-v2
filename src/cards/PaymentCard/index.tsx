import React from 'react';
import cx from 'classnames';


import { Card } from '../Card';
import { FlippingCard, FlippingProps } from '../FlippingCard';
import { FlippingCardFront, FlippingFrontProps } from '../FlippingCard/FlippingCardFront';
import { FlippingCardBack, FlippingBackProps } from '../FlippingCard/FlippingCardBack';
import { BackgroundProps, PaymentCardBackground }from './PaymentCardBackground';
import { IssuerIcon, IssuerProps } from './IssuerIcon';
import { Chip } from './Chip';
import { PaymentCardDate, DateProps } from './PaymentCardDate';
import { PaymentCardName, NameProps } from './PaymentCardName';
import { PaymentCardNumber, NumberProps } from './PaymentCardNumber';
import { PaymentCardBack, BackProps } from './PaymentCardBack';

import styles from './styles.module.scss';

type PaymentProps = FlippingProps & BackgroundProps & IssuerProps & DateProps & NameProps & NumberProps & BackProps &{
  [key: string]: any;
}

const PaymentCard: React.FC<PaymentProps> = ({
    className,
    background,
    backgroundPattern,
    issuerIcon,
    number,
    date,
    name,
    cvv,
    ...other
}) => <FlippingCard
    className={ cx(
     styles['payment-card']
    )}
    { ...other } 
>
<FlippingCardFront>
  <PaymentCardBackground
    background={ background }
    backgroundPattern={ backgroundPattern }
  />
  <IssuerIcon
    icon={ issuerIcon }
  />
  <Chip />
  <PaymentCardNumber
    number={ number }
  />
  <PaymentCardDate
    date={ date }
  />
  <PaymentCardName
    name={ name }
  />

</FlippingCardFront>
<FlippingCardBack>
  <PaymentCardBackground
    background={ background }
    backgroundPattern={ null }
  />
  <PaymentCardBack
    cvv={ cvv }
  />
</FlippingCardBack>
</FlippingCard>

export { PaymentCard };