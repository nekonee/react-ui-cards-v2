import React from 'react';

import styles from './styles.module.scss';

type BackgroundProps = {
    thumbnail: string;
}

const NewsHeaderBackground: React.FC<BackgroundProps> = ({
    thumbnail
}) => <div className={styles['news-header-background']}>
      <div className={styles['overlay']} />
      <div className={styles['thumbnail']}>
        <div style ={{backgroundImage : `url(${thumbnail})`}}/>
     </div>
    </div>


export { NewsHeaderBackground };