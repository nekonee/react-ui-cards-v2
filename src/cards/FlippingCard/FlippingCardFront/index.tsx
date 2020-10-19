import React from 'react';

import styles from './styles.module.scss';

type FrontProps = {
    children: React.ReactNode
}

const FlippingCardFront: React.FC<FrontProps> = ({
    children
}) => <div className={styles['front']}>
      { children }
    </div>

export { FlippingCardFront };