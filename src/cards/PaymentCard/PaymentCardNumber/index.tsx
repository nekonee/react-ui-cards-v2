import React from 'react';

import styles from './styles.module.scss';

type NumberProps = {
    number: string | number;
}

const PaymentCardNumber: React.FC<NumberProps> = ({
    number
}) => <div className={styles['payment-card-number']}>
        { number }
    </div>

export { PaymentCardNumber, NumberProps };