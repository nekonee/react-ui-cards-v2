import React, { ReactElement } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type IssuerProps = {
    icon: string | React.ReactElement
}

const IssuerIcon : React.FC<IssuerProps> = ({
    icon
}) => <div className={ styles["issuer-icon"] }>
    { icon === undefined
    ? null
    : typeof icon === 'string'
        ? (
        <img src={ icon } alt='Card issuer icon' />
        )
        : icon
    }
</div>

export { IssuerIcon, IssuerProps };