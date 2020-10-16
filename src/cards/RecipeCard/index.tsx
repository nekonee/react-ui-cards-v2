import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { RecipeCardContent } from './RecipeCardContent';
import { RecipeCardDesc } from './RecipeCardDesc';

import styles from './styles.module.scss';

type RecipeProps = RecipeCardContent & RecipeCardDesc & {
    className: string;
}

const RecipeCard: React.FC<RecipeProps> = ({
    className,
    href,
    thumbnail,
    likeCallback,
    title,
    time,
    servings
}) => <Card className={ styles['recipe-card'] }>
        <RecipeCardContent
            href= { href }
            thumbnail= { thumbnail }
        />

        <RecipeCardDesc
            title= { title }
            time= { time }
            servings= { servings }
            likeCallback= { likeCallback }
        />
    </Card>


export { RecipeCard };