import React from 'react';

import styles from './styles.module.scss';

type BackProps = {
    cvv: number | string;
}

const PaymentCardBack: React.FC<BackProps> = ({
    cvv
}) => <div className={ styles['payment-card-back'] }>
    <span className={ styles['magnetic-stripe'] } />
    <div className={ styles['signature-field'] }>
        <span className={ styles.cvv }>
            { cvv }
        </span>
    </div>
</div>

export { PaymentCardBack, BackProps };