import React from 'react';

import styles from './styles.module.scss';

type BackProps = {
    children: React.ReactNode
}

const FlippingCardBack: React.FC<BackProps> = ({
    children
}) => <div className={styles['back']}>
      { children }
    </div>

export { FlippingCardBack };