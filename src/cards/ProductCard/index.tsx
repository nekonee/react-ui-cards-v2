import React from 'react';
import cx from 'classnames';

import { Card } from '../Card';
import { ProductCardDescription, DescriptionProps } from './ProductCardDescription';
import { ProductCardGallery, GalleryCardProps } from './ProductCardGallery';
import { PriceTag, PriceProps } from './PriceTag';

import styles from './styles.module.scss';

type ProductProps = DescriptionProps & GalleryCardProps & PriceProps & {
    className: string;
    [key: string]: any;
}

const ProductCard: React.FC<ProductProps> = ({
    className,
    photos,
    price,
    productName,
    description,
    buttonText,
    rating,
    url,
    ...other
}) => <Card
    className={cx(
        styles['product-card'],
        className
    )}
    {...other}
>
        <ProductCardGallery photos={photos} />
        <PriceTag price={price} />
        <ProductCardDescription
            productName={productName}
            description={description}
            buttonText={buttonText}
            rating={rating}
            url={url}
        />
    </Card>

export { ProductCard };