import React from 'react';

import styles from './styles.module.scss';

type FlippingFrontProps = {
    children: React.ReactNode
}

const FlippingCardFront: React.FC<FlippingFrontProps> = ({
    children
}) => <div className={ styles['front'] }>
      { children }
    </div>

export { FlippingCardFront, FlippingFrontProps };