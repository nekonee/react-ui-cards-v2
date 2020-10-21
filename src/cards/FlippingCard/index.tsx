import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { FlippingCardBack, FlippingBackProps } from './FlippingCardBack';
import { FlippingCardFront, FlippingFrontProps } from './FlippingCardFront';

import styles from './styles.module.scss';

type FlippingProps= FlippingFrontProps & FlippingBackProps & {
    className: string;
    [key: string] : any;
}
const FlippingCard: React.FC<FlippingProps> = ({
    className,
    children,
    ...other
}) => <Card className={ cx(
    styles['flipping-card-container'],
    className )}
    { ...other }
    >
    <div className={ styles['flipping-card'] }>
    { children } 
    </div>
</Card>

export { FlippingCard, FlippingProps };