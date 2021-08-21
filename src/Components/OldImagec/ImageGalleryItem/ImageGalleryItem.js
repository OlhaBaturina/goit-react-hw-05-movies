import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, onModal, largeImageURL }) => {
    return (
        <li className={s.ImageGalleryItem}>
            <img
                className={s.ImageGalleryItem_image}
                src={image}
                alt={tags}
                onClick={() => onModal(largeImageURL)}
            />
        </li>
    );
};

ImageGalleryItem.defaultProps = {
    images: 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
    tags: '',
};

ImageGalleryItem.propTypes = {
    image: PropTypes.string,
    tags: PropTypes.string,
};

export default ImageGalleryItem;
