import { NavLink } from 'react-router-dom';
import logo from '../../img/Logowhite.png';
import { useTranslation } from 'react-i18next';

export default function FooterMain() {

    const { t } = useTranslation()

    return (
        <div className="footermain mt-[40px] flex items-start justify-between">
            <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to={'/'}>
                <div className="mr-[150px]">
                    <h1 className="text-lg font-bold text-[#ffff]">
                        Toshkent kimyo-texnologiya instituti <br /> Yangiyer filiali
                    </h1>
                    <img className='w-[100px] mt-[10px]' src={logo} alt="foto" />
                </div>
            </NavLink>
            <div className="footermain_content flex items-start justify-between gap-[100px]">
                <ul>
                    <NavLink to="">
                        <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                            {t('Umumiy_malumot')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/biz-haqimizda">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('biz_haqimizda')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/rahbariyat">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('rahbariyat')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/bo'lim-markazlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('bolim_markazlar')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/rekvizitlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('rekvizitlar')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/virtual-kabinet">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('virtual_kabinet')}
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/ochiq-ma'lumotlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('ochiq_malumotlar')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/korrupsiyaga-kurash">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('korrupsiya_kurash')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/hujjatlar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('hujjatlar')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/bosh-ish-orni">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('bosh_ish_orni')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/xalqaro-aloqalar">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('xalqaro_aloqalar')}
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        to="/hamkorlarimiz">
                        <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                            {t('hamkorlarimiz')}
                        </li>
                    </NavLink>
                </ul>
                <ul className="ul_main">
                    <NavLink to="">
                        <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                            {t('boglanish')}
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
                            {t('manzil2')}
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}
