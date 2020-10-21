import React, { ReactElement } from 'react';

import styles from './styles.module.scss';

const Chip: React.FC = () => <div className={ styles["chip-container"] }>
    <span className={ styles['chip'] } />
</div>

export { Chip };