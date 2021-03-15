import React from 'react';

import { Card } from '../Card';
import { UserCardAvatar, UserCardAvatarProps } from './UserCardAvatar';
import { UserCardBody, UserCardBodyProps } from './UserCardBody';
import { UserCardHeader, UserCardHeaderProps } from './UserCardHeader';
import { UserCardStats, UserCardStatsProps } from './UserCardStats';

import styles from './styles.module.scss';


type UserCardProps = UserCardBodyProps & UserCardAvatarProps & UserCardHeaderProps & UserCardStatsProps & {
    className: string;
    href: string;
    header: string;
    avatar: string;
}

const UserCard: React.FC<UserCardProps> = ({
    className,
    href,
    header,
    avatar,
    name,
    positionName,
    children,
    stats
}) => <a className={styles['card-link']} href={href}>
        <Card
            className={ className }
        >
            <UserCardHeader
                className={styles['header-styles']}
                src={ header }
            />
            <UserCardAvatar
                className={styles['avatar-styles']}
                src={ avatar }
            />
            <UserCardBody
                name={ name }
                positionName={ positionName }
            >
                { children }
            </UserCardBody>

            {
                stats !== undefined
                    ? <UserCardStats
                        stats={ stats }
                    />
                    : null
            }

        </Card>
    </a>


export { UserCard };