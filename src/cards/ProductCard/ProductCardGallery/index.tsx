import React, { useState, useCallback } from 'react';
import cx from 'classnames';

import { GalleryToggle } from './GalleryToggle';

import styles from './styles.module.scss';

type GalleryCardProps = {
    photos: string[];
}


const ProductCardGallery: React.FC<GalleryCardProps> = ({
    photos
}) => {
    const n = photos.length;
    const [activeItem, setActiveItem] = useState(0);
    const rotateRight = useCallback(() =>
        setActiveItem((((activeItem + 1) % n) + n) % n),
        [activeItem, setActiveItem, n]
    );
    const rotateLeft = useCallback(() =>
        setActiveItem((((activeItem - 1) % n) + n) % n),
        [activeItem, setActiveItem, n]
    );
    return (
        <div className={styles['product-card-gallery']} >
            {
                photos.map((photo, i) => {
                    return (
                        <div
                            className={cx(
                                styles['gallery-item'],
                                { [`${styles['active']}`]: activeItem === i  }
                            )}
                            style={{
                                backgroundImage: `url(${photo})`
                            }}
                        />
                    );
                })
            }
            <GalleryToggle
                icon='>'
                action={rotateRight}
                right
            />
            <GalleryToggle
                icon='<'
                action={rotateLeft}
                left
            />
        </div>
    );
};

export { ProductCardGallery, GalleryCardProps };