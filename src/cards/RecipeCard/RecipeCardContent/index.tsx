import React from 'react';

import styles from './styles.module.scss';

type RecipeContentProps = {
    thumbnail: string;
    href: string;
}

const RecipeCardContent: React.FC<RecipeContentProps> = ({
    thumbnail,
    href
}) => <a
    href={href}
    className={styles['recipe-card-content']}
    >
    <div className={styles.thumbnail}>
        <div style={{backgroundImage: `url(${thumbnail})`}}/>
  </div>
</a>

export { RecipeCardContent };