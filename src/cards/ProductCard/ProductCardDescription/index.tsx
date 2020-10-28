import React from 'react';

import styles from './styles.module.scss';

type DescriptionProps = {
    productName: string;
    description: string;
    buttonText: string;
    rating: number | string;
    url: string;
}


const ProductCardDescription: React.FC<DescriptionProps> = ({
    productName,
    description,
    buttonText,
    rating,
    url
}) => {
    const renderButton = () => {
        if (buttonText) {
            return (
                <div className={ styles['row'] }>
                    <a className={ styles['buy-button'] }
                    href={ url }>
                        { buttonText }
                    </a>
                </div>
            );
        } else {
            return null;
        }
    };
    return (
        <div className={ styles['product-card-description-box'] }>
            <div className={ styles['product-card-name'] }>
                { productName }
                </div>
            <p className={ styles['product-card-description'] }>
                { description }
                </p>
            { renderButton() }
        </div>
    );
};

export { ProductCardDescription, DescriptionProps };