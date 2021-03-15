import React from 'react';

import styles from './styles.module.scss';

type UserCardHeaderProps = {
    src: string
}

const UserCardHeader: React.FC<UserCardHeaderProps> = ({
    src
}) => <div
    className={styles['user-card-header']}
    style={{backgroundImage: `url(${src})`}}
  >
</div>

export { UserCardHeader, UserCardHeaderProps };