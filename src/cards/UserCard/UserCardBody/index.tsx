import React from 'react';

import styles from './styles.module.scss';

type UserCardBodyProps = {
    name: string;
    position: string;
    children: React.ReactNode;
}

const UserCardBody: React.FC<UserCardBodyProps> = ({
    name,
    position,
    children
}) => <div
    className={styles['user-card-body']}>
        <div className={styles['user-card-name']}>
            { name }
        </div>
        <div className={styles['user-card-position-name']}>
            { positionName }
        </div>
        { children }
    </div>


export { UserCardBody, UserCardBodyProps };