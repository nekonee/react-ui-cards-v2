import React from 'react';

import styles from './styles.module.scss';

type DateProps = {
    date: string | Date
}

const PaymentCardDate: React.FC<DateProps> = ({
    date
}) => <div className={ styles['payment-card-date'] }>
        <div className={ styles['valid-date'] }>Valid dates</div>
        <div className={ styles['to-date'] }>{ date }</div>
    </div>


export { PaymentCardDate, DateProps };