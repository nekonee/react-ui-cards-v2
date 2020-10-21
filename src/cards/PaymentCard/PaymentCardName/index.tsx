import React from 'react';

import styles from './styles.module.scss';

type NameProps = {
    name: string;
}

const PaymentCardName: React.FC<NameProps> = ({
    name
}) => <div className={ styles['payment-card-name'] }>
        { name }
    </div>

export { PaymentCardName, NameProps };