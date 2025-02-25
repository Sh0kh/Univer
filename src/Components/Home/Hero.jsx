import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import foto from '../../img/DSC07759.png'
import foto2 from '../../img/IMG_0188.png'

export default function Hero() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-[700px] bg-cover bg-center"
        >
            <SwiperSlide className=" w-full h-full bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(180deg, rgba(68, 76, 231, 0.2) 0%, #00044f 100%), url(https://static.review.uz/crop/3/1/1400__100_315208962.jpg?v=1593637066)" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Toshkent kimyo-texnologiya instituti Yangiyer filialining veb saytiga hush kelibsiz                            </h1>
                            <p className="mt-4 text-lg">
                                Rasmiy veb sayt kunlik yangilik va e’lonlar hamda qo’shimcha funksiyalardan iborat bo‘lib, barcha axborotlarni olish imkoniyati beradi
                            </p>
                            <button className="flex items-center justify-between mt-[40px] border-[#d5d7da] rounded-lg px-[18px] py-[12px] w-[124px] h-[48px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05),_inset_0_-2px_0_0_rgba(10,13,18,0.05),_inset_0_0_0_1px_rgba(10,13,18,0.18)] bg-white font-semibold">
                                <span className="text-[16px] leading-[150%] text-[#414651]">Batafsil</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16666 7.50002H12.8333M12.8333 7.50002L6.99999 1.66669M12.8333 7.50002L6.99999 13.3334" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(180deg, rgba(68, 76, 231, 0.2) 0%, #00044f 100%), url(${foto})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Toshkent kimyo-texnologiya instituti Yangiyer filialining veb saytiga hush kelibsiz                            </h1>
                            <p className="mt-4 text-lg">
                                Rasmiy veb sayt kunlik yangilik va e’lonlar hamda qo’shimcha funksiyalardan iborat bo‘lib, barcha axborotlarni olish imkoniyati beradi
                            </p>
                            <button className="flex items-center justify-between mt-[40px] border-[#d5d7da] rounded-lg px-[18px] py-[12px] w-[124px] h-[48px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05),_inset_0_-2px_0_0_rgba(10,13,18,0.05),_inset_0_0_0_1px_rgba(10,13,18,0.18)] bg-white font-semibold">
                                <span className="text-[16px] leading-[150%] text-[#414651]">Batafsil</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16666 7.50002H12.8333M12.8333 7.50002L6.99999 1.66669M12.8333 7.50002L6.99999 13.3334" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(180deg, rgba(68, 76, 231, 0.2) 0%, #00044f 100%), url(${foto2})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Toshkent kimyo-texnologiya instituti Yangiyer filialining veb saytiga hush kelibsiz                            </h1>
                            <p className="mt-4 text-lg">
                                Rasmiy veb sayt kunlik yangilik va e’lonlar hamda qo’shimcha funksiyalardan iborat bo‘lib, barcha axborotlarni olish imkoniyati beradi
                            </p>
                            <button className="flex items-center justify-between mt-[40px] border-[#d5d7da] rounded-lg px-[18px] py-[12px] w-[124px] h-[48px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05),_inset_0_-2px_0_0_rgba(10,13,18,0.05),_inset_0_0_0_1px_rgba(10,13,18,0.18)] bg-white font-semibold">
                                <span className="text-[16px] leading-[150%] text-[#414651]">Batafsil</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16666 7.50002H12.8333M12.8333 7.50002L6.99999 1.66669M12.8333 7.50002L6.99999 13.3334" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}