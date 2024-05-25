import React, { useState } from 'react'
import moment from 'moment';
import { BsCalendar, BsCrop, BsList } from 'react-icons/bs';
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import ModalDatePicker from './ModalDatePicker';
import epaper_logo from '../assets/image/epaper_logo.jpg';

const Header = ({ onMenuPress, onCropPress }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const extractedPath = currentPath.split('/')[1];
    const settings = useSelector(state => state.ePaper.settings)
    const color = settings?.epaper_sitetheme.primary_color_code;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(Date.now());

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
        closeModal();
    };

    return (
        <>
            <ModalDatePicker isModalOpen={modalIsOpen} onModalClose={closeModal} selectedDate={selectedDate} onChangeDate={handleDateChange} />
            {currentPath == '/' && (
                <div className={`flex items-center justify-center xl:justify-end padding-x py-2 ${color ? '' : 'bg-[#2E3192]'} cursor-pointer`} style={{ backgroundColor: color ? color : undefined }} onClick={openModal}>
                    <p className='mr-2 font-medium text-white'>{moment(selectedDate).format('dddd, LL')}</p>
                    <BsCalendar className='text-white' />
                </div>
            )}
            <header className={`flex items-center ${extractedPath == 'pdf-view' ? 'max-xl:justify-between' : 'max-xl:justify-center'} padding-x py-2 xl:py-4 bg-white`}>
                {extractedPath == 'pdf-view' && (<BsList className='hidden max-xl:block size-6 cursor-pointer' onClick={onMenuPress} />)}
                <Link to={'/'}>
                    <img src={settings?.sitelogo || epaper_logo} alt="Site Logo" className='h-12 sm:h-16 md:h-20 lg:24 xl:h-28 object-contain' />
                </Link>
                {extractedPath == 'pdf-view' && (<BsCrop className='hidden max-xl:block size-6 cursor-pointer' onClick={onCropPress} />)}
            </header>
        </>
    )
}

export default Header