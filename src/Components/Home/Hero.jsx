import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Bg from "../../img/Footer.png";
import gsap from 'gsap';
import axios from "axios";
import ReactLoading from "react-loading";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Hero() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { i18n, t } = useTranslation();

    useEffect(() => {
        gsap.fromTo('.Debtors',
            { opacity: 0, y: "10%" },
            { opacity: 1, duration: 1, ease: "power1.inOut", y: "0" }
        );
    }, []);

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        try {
            const response = await axios.get(`/carousel`);
            setData(response?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading) {
            gsap.fromTo(
                ".slide-content > *",
                { opacity: 0, x: "-50px" },
                { opacity: 1, x: "0", duration: 1, stagger: 0.3, ease: "power2.out" }
            );
        }
    }, [loading]);

    if (loading) {
        return (
            <div
                className="flex items-center justify-center h-screen fixed inset-0 z-50"
                style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
                <ReactLoading type="spinningBubbles" color="#ffffff" height={100} width={100} />
            </div>
        );
    }
    return (
        <div className="Hero relative w-full h-[700px]">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-full bg-cover bg-center"
            >
                {data?.map((i, index) => (
                    <SwiperSlide key={index} className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(180deg, rgba(68, 76, 231, 0.2) 0%, #00044f 100%), url(${i?.image[0]?.url})` }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                                <div className="max-w-2xl text-white slide-content">
                                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                        {i?.title[i18n?.language]}
                                    </h1>
                                    <p className="mt-4 text-lg">
                                        {i?.description[i18n?.language]}
                                    </p>
                                    <NavLink
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        to={`/yangilik/${i?.id}`} >
                                        <button className="flex items-center gap-[10px] justify-between mt-[40px] border-[#d5d7da] rounded-lg px-[18px] py-[12px]  h-[48px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05),_inset_0_-2px_0_0_rgba(10,13,18,0.05),_inset_0_0_0_1px_rgba(10,13,18,0.18)] bg-white font-semibold">
                                            <span className="text-[16px] leading-[150%] text-[#414651]">{t('Batafsil')}</span>
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.16666 7.50002H12.8333M12.8333 7.50002L6.99999 1.66669M12.8333 7.50002L6.99999 13.3334" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination"></div>
        </div>
    );
}
