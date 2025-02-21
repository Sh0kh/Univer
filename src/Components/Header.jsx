import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import glass from '../img/glass.png';
import eye from '../img/eye.png';
import sound from '../img/sound.png';
import logo from '../img/logo.png';

import burger from '../img/More.png';
import BigModal from './others/BigModal';
import VisionModal from './others/VisionModal';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const [visionModal, setVisionModal] = useState(false)

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setShowModal(!showModal);
    };
    const { t } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
    const modalRef1 = useRef(null);



    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowModal(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside2 = (e) => {
            if (modalRef1.current && !modalRef1.current.contains(e.target)) {
                setVisionModal(false);
            }
        };
        document.addEventListener('click', handleClickOutside2);
        return () => {
            document.removeEventListener('click', handleClickOutside2);
        };
    }, []);

    return (
        <header className="bg-white shadow-md relative z-50 ">
            <div className="Container">
                <div className="flex justify-between items-center py-3 border-b">
                    <ul className="flex space-x-4 text-sm text-gray-600">
                        <li>Hemis</li>
                        <li>Qabul kunlari</li>
                        <li>Murojaatlar</li>
                        <li>Davlat ramzlari</li>
                    </ul>
                    <div className="flex space-x-2">
                        <button><img src={glass} alt="Search" /></button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setVisionModal(prev => !prev); }}
                        ><img src={eye} alt="Visibility" /></button>
                        <button><img src={sound} alt="Sound" /></button>
                        <select className="border rounded px-2 py-1 text-sm">
                            <option onClick={() => changeLanguage("uz")} value="1">Uz</option>
                            <option onClick={() => changeLanguage("ru")} value="2">Ru</option>
                            <option onClick={() => changeLanguage("en")} value="3">En</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="Logo" className="mr-[20px]" />
                        <div>
                            <h1 className="h-h1 text-lg font-bold text-[#1f235b]">Toshkent kimyo-texnologiya instituti <br /> Yangiyer filiali</h1>
                            <p className="h-p text-sm text-gray-600">rasmiy veb sayti</p>
                        </div>
                    </div>
                    <div className="h-service flex space-x-6">
                        <div className="flex items-center space-x-2">
                            <div className='res'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">Ishonch telefoni:</p>
                                <h4 className="text-sm font-bold">(71) 203 00 50</h4>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className='res'>
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5 15L13.8571 9M8.14286 9L1.50003 15M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">Elektron pochta:</p>
                                <h4 className="text-sm font-bold">info@imv.uz</h4>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">

                            <div className='res'>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 21C13 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 5 17 9 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Manzil:</p>
                                <h4 className="text-sm font-bold">Sirdaryo viloyati, Yangiyer tumani</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="w-full bg-[#002266] text-white py-3 px-4 rounded p-[16px]">
                <div className="Container flex items-center gap-[44px]">
                    <img src={burger} onClick={() => setIsModalOpen(true)} alt="Menu" />
                    {isModalOpen && <BigModal go={() => setIsModalOpen(false)} />}
                    <div className="menu_wr relative">
                        <a href="#" onClick={handleMenuClick} className="hover:underline">
                            Umumiy ma’lumot
                        </a>
                        {showModal && (
                            <div
                                ref={modalRef}
                                className="absolute top-8 w-[300px] left-0 z-50 bg-white p-4 shadow-lg rounded-lg"
                            >
                                <NavLink to="/aboutus" className="text-blue-500 hover:underline block mb-[10px]">
                                    Biz haqimizda
                                </NavLink>
                                <NavLink to="/staff" className="text-blue-500 hover:underline block mb-[10px]">
                                    Raxbariyat
                                </NavLink>
                                <NavLink to="/partners" className="text-blue-500 hover:underline block mb-[10px]">
                                    Hamkorlarimiz
                                </NavLink>
                                <NavLink to="/International" className="text-blue-500 hover:underline block mb-[10px]">
                                    Xalqaro aloqalar
                                </NavLink>
                                <NavLink to="/documents" className="text-blue-500 hover:underline block mb-[10px]">
                                    Me’yoriy hujjatlar
                                </NavLink>
                                <NavLink to="/inspectDocument" className="text-blue-500 hover:underline block mb-[10px]">
                                    Murojaatlarni ko‘rib chiqish tartibi
                                </NavLink>
                                <NavLink to="/openInfo" className="text-blue-500 hover:underline block mb-[10px]">
                                    Ochiq ma’lumotlar
                                </NavLink>
                                <NavLink to="/center" className="text-blue-500 hover:underline block mb-[10px]">
                                    Bo‘lim va markazlar
                                </NavLink>
                                <NavLink to="/rekvizits" className="text-blue-500 hover:underline block mb-[10px]">
                                    Rekvizitlar
                                </NavLink>
                                <NavLink to="/cabinet" className="text-blue-500 hover:underline block mb-[10px]">
                                    Direktor virtual qabulxonasi
                                </NavLink>
                                <NavLink to="/money" className="text-blue-500 hover:underline block mb-[10px]">
                                    Korrupsiyaga qarshi kurashish
                                </NavLink>
                                <NavLink to="/work" className="text-blue-500 hover:underline block mb-[10px]">
                                    Bo‘sh ish o‘rinlari
                                </NavLink>

                            </div>
                        )}
                    </div>
                    <div className="menu_wr">
                        <a href="#" className="hover:underline">Qabul 2024-2025</a>
                    </div>
                    <div className="menu_wr">
                        <a href="#" className="hover:underline">Ta’lim</a>
                    </div>
                    <div className="menu_wr">
                        <a href="#" className="hover:underline">Ilm-fan</a>
                    </div>
                    <div className="menu_wr">
                        <a href="#" className="hover:underline">Talabalarga</a>
                    </div>
                    <a href="#" className="hover:underline">Axborot xizmati</a>
                    <a href="#" className="hover:underline">Bog‘lanish</a>
                </div>
            </nav>
            <VisionModal isOpen={visionModal} ref={modalRef1} />
        </header>
    );
}
