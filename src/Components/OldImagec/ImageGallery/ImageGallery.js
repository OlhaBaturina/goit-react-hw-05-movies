import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImgClick }) => {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, largeImageURL, webformatURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    image={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    onModal={onImgClick}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
