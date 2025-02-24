import { NavLink } from 'react-router-dom';
import logo from '../../img/Ratings badge.png';

export default function FooterMain() {
    return (
        <div className="footermain mt-[40px] flex items-center justify-between">
            <div className="mr-[150px]">
                <h1 className="text-lg font-bold text-[#ffff]">
                    Toshkent kimyo-texnologiya instituti <br /> Yangiyer filiali
                </h1>
                <p className="mb-[20px] mt-[10px] h-p text-sm text-gray-600">rasmiy veb sayti</p>
                <img src={logo} alt="" />
            </div>
            <div className="footermain_content flex items-start justify-between gap-[100px]">
                <ul>
                    <NavLink to="">
                        <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                            UMUMIY MA’LUMOT
                        </li>
                    </NavLink>
                    <NavLink to="/aboutus">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Biz haqimizda
                        </li>
                    </NavLink>
                    <NavLink to="/staff">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Rahbariyat
                        </li>
                    </NavLink>
                    <NavLink to="">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Fakultet va kafedralar
                        </li>
                    </NavLink>
                    <NavLink to="/center">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Bo’lim va markazlar
                        </li>
                    </NavLink>
                    <NavLink to="/rekvisits">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Rekvizitlar
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Direktor virtual qabulxonasi
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="/openInfo">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Ochiq ma’lumotlar
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Korrupsiyaga qarshi kurashish
                        </li>
                    </NavLink>
                    <NavLink to="/documents">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Me’yoriy nhujjatlar
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Bo’sh ish o’rinlari
                        </li>
                    </NavLink>
                    <NavLink to="/International">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Xalqaro aloqalar
                        </li>
                    </NavLink>
                    <NavLink to="/partners">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Hamkorlarimiz
                        </li>
                    </NavLink>
                </ul>
                <ul className="ul_main">
                    <NavLink to="">
                        <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                            BOG‘LANISH
                        </li>
                    </NavLink>
                    <NavLink to="">
                        <li className="qWE className='font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]'">
                            +998 95 123 00 00
                        </li>
                    </NavLink>
                    <NavLink to="">
                        <li className="flex items-center justify-between font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            info@tktiyf.uz
                        </li>
                    </NavLink>
                    <NavLink to="">
                        <li className="flex items-center justify-between font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            100021
                        </li>
                    </NavLink>
                    <NavLink to="">
                        <li className="flex items-center justify-between font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Sirdaryo viloyati, Yangiyer shahri, Mustaqillik ko’chasi 12A
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}
