import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import CustomLoader from './Components/Loader/Loader';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import { fetchImgAPI } from './servises/useFetch';
import Tour from './Components/Tour/Tour';

export function App() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(1);
    const [imgSet, setImgSet] = useState([]);

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        fetching();
    }, [searchQuery]);

    const fetching = async () => {
        setLoading(true);
        try {
            const imgsResponse = await fetchImgAPI(searchQuery, currentPage);
            console.log(imgsResponse);
            setImages(prevState => [...prevState, ...imgsResponse]);
            setImgSet(imgsResponse);
            setCurrentPage(currentPage + 1);
            setLoading(false);
            setError(null);

            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        } catch (error) {
            setError(error.response);
            setLoading(false);
        }
    };

    const onChangeQuery = query => {
        setSearchQuery(query.trim());
        setCurrentPage(1);
        setImages([]);
        setError(null);
    };

    const openModal = largeImageURL => {
        setShowModal(true);
        setModalImage(largeImageURL);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImage('');
    };

    return (
        <div className={s.App}>
            <ToastContainer />
            <Tour />
            <Searchbar onSubmit={onChangeQuery} />
            {error ? (
                toast.error(`Something went wrong error: ${error}`)
            ) : (
                <ImageGallery images={images} onImgClick={openModal} />
            )}
            {loading && <CustomLoader />}
            {imgSet.length >= 12 && (
                <Button text={'Load more...'} onLoadClick={fetching} />
            )}
            {showModal && (
                <Modal closeModal={closeModal}>
                    <img src={modalImage} alt="img" />
                </Modal>
            )}
        </div>
    );
}
