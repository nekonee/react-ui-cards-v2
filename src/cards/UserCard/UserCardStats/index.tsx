import React from 'react';

import styles from './styles.module.scss';


type UserCardStatsProps = {
    stats: {
        value: number | string;
        name: string;
    }[];
}

const UserCardStats: React.FC<UserCardStatsProps> = ({
    stats
}) => <div
    className={styles['user-card-stats']}
>
        {
            stats.map((stat, i) => {
                return (
                    <div className={styles['stat-container']}>
                        <div className={styles['stat-value']}>
                            { stat.value }
                        </div>
                        <div className={styles['stat-name']}>
                            { stat.name }
                        </div>
                    </div>
                );
            })
        }
    </div>


export { UserCardStats, UserCardStatsProps };