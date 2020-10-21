import React from 'react';

import styles from './styles.module.scss';

type FlippingBackProps = {
    children: React.ReactNode
}

const FlippingCardBack: React.FC<FlippingBackProps> = ({
    children
}) => <div className={ styles['back'] }>
      { children }
    </div>

export { FlippingCardBack, FlippingBackProps };