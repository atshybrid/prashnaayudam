import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import ReactSlider from "react-slick";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from "react-router-dom";
import epaper_default from '../assets/image/epaper_default.jpg';

const Slider = () => {
    const setting = useSelector(state => state.ePaper.settings)
    const color = setting?.epaper_sitetheme;
    // let sliderRef = useRef(null);
    const items = [...Array(1)];
    // const slidesToShow = Math.min(items.length, 7);

    // useEffect(() => {
    //     sliderRef.slickPlay();
    //     // sliderRef.slickGoTo(0);
    // }, [])

    // const NextArrow = (props) => {
    //     const { onClick } = props;
    //     return (
    //         <div onClick={onClick} className="hidden xl:flex absolute z-10 right-4 w-8 h-8 bg-gray-800 rounded-full items-center justify-center">
    //             <BsChevronRight className="text-white" />
    //         </div>
    //     );
    // }

    // const PrevArrow = (props) => {
    //     const { onClick } = props;
    //     return (
    //         <div onClick={onClick} className="hidden xl:flex absolute z-10 left-4 w-8 h-8 bg-gray-800 rounded-full items-center justify-center">
    //             <BsChevronLeft className="text-white" />
    //         </div>
    //     );
    // }

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     arrows: items.length < 7 ? false : true,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     swipe: items.length < 7 ? false : true,
    //     responsive: [
    //         {
    //             breakpoint: 1280,
    //             settings: {
    //                 slidesToShow: Math.min(items.length, 5),
    //                 slidesToScroll: 1,
    //                 initialSlide: 0,
    //                 swipe: items.length < 5 ? false : true,
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: Math.min(items.length, 4),
    //                 slidesToScroll: 1,
    //                 initialSlide: 0,
    //                 swipe: items.length < 4 ? false : true,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: Math.min(items.length, 3),
    //                 slidesToScroll: 1,
    //                 initialSlide: 0,
    //                 swipe: items.length < 3 ? false : true,
    //             }
    //         },
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 slidesToShow: Math.min(items.length, 2),
    //                 slidesToScroll: 1,
    //                 initialSlide: 0,
    //                 swipe: items.length < 2 ? false : true,
    //             }
    //         }
    //     ]
    // };

    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {/* <ReactSlider ref={slider => (sliderRef = slider)} {...settings} className="flex items-center"> */}
            {items.map((item, i) => (
                <Link key={i} to={`/pdf-view/${i}`} className="shadow border-2 border-slate-300 hover:border-black">
                    <img src={epaper_default} alt="slider_image" />
                    <p className={`text-center ${color?.primary_color_code ? '' : 'text-white'} ${color?.secondary_color_code ? '' : 'bg-[#ED1B24]'} text-xl font-bold py-2`} style={{ backgroundColor: color?.secondary_color_code ? color?.secondary_color_code : undefined, color: color?.primary_color_code ? color?.primary_color_code : undefined }}>{'Telangana'}</p>
                </Link>
            ))}
            {/* </ReactSlider> */}
        </div>
    )
}

export default Slider;