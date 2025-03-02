import { NavLink } from 'react-router-dom';
import logo from '../../img/Ratings badge.svg';

export default function FooterMain() {
    return (
        <div className="footermain mt-[40px] flex items-start justify-between">
            <div className="mr-[150px]">
                <h1 className="text-lg font-bold text-[#ffff]">
                    Toshkent kimyo-texnologiya instituti <br /> Yangiyer filiali
                </h1>
            </div>
            <div className="footermain_content flex items-start justify-between gap-[100px]">
                <ul>
                    <NavLink to="">
                        <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                            UMUMIY MA’LUMOT
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/biz-haqimizda">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Biz haqimizda
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/rahbariyat">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Rahbariyat
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/bo'lim-markazlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Bo’lim va markazlar
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/rekvizitlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Rekvizitlar
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/virtual-kabinet">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Direktor virtual qabulxonasi
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/ochiq-ma'lumotlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Ochiq ma’lumotlar
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/korrupsiyaga-kurash">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Korrupsiyaga qarshi kurashish
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/hujjatlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Me’yoriy hujjatlar
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/bosh-ish-orni">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Bo’sh ish o’rinlari
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/xalqaro-aloqalar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            Xalqaro aloqalar
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/hamkorlarimiz">
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
                            +998 (95) 511 58 56
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
                            Sirdaryo viloyati, Yangiyer shahar,
                            Tinchlik ko'chasi, 1-uy
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}
