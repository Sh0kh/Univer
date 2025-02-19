import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import glass from '../img/glass.png';
import eye from '../img/eye.png';
import sound from '../img/sound.png';
import logo from '../img/logo.png';
import call from '../img/call.png';
import email from '../img/email.png';
import location from '../img/locotion.png';
import burger from '../img/More.png';

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const handleMenuClick = (e) => {
        e.stopPropagation(); // Prevent event propagation to avoid closing modal immediately
        setShowModal(!showModal);
    };

    // Close modal if clicked outside
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

    return (
        <header className="bg-white shadow-md z-50">
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
                        <button><img src={eye} alt="Visibility" /></button>
                        <button><img src={sound} alt="Sound" /></button>
                        <select className="border rounded px-2 py-1 text-sm">
                            <option value="1">Uz</option>
                            <option value="2">Ru</option>
                            <option value="3">En</option>
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
                            <img src={call} alt="Phone" />
                            <div>
                                <p className="text-xs text-gray-500">Ishonch telefoni:</p>
                                <h4 className="text-sm font-bold">(71) 203 00 50</h4>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src={email} alt="Email" />
                            <div>
                                <p className="text-xs text-gray-500">Elektron pochta:</p>
                                <h4 className="text-sm font-bold">info@imv.uz</h4>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src={location} alt="Location" />
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
                    <img src={burger} alt="Menu" />
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
        </header>
    );
}
