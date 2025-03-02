import { useState } from "react";
import { NavLink } from "react-router-dom";
import foto from "../../img/Footer.png";
import { useTranslation } from "react-i18next";

export default function PhoneHeaderModal({ isOpen, onClose, data }) {
    const { i18n } = useTranslation();
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div
            className="PhoneModal fixed left-0 right-0 bottom-0 z-[100000] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${foto})`,
                transform: isOpen ? "translateX(0)" : "translateX(-200%)",
                transition: "transform 0.5s ease-in-out",
            }}
        >
            <div className="Container ">
                <svg

                    onClick={onClose}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer mb-[20px]"
                >
                    <path
                        d="M24 8L8 24M8 8L24 24"
                        stroke="#A4A7AE"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className="modal_wr grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                    {[{
                        title: {
                            uz: "UMUMIY MA’LUMOT", ru: 'ОБЩАЯ ИНФОРМАЦИЯ', en: 'GENERAL INFORMATION', kk: '一般資訊'
                        }, details: [
                            { to: "/biz-haqimizda", text: "Biz haqimizda" },
                            { to: "/rahbariyat", text: "Rahbariyat" },
                            { to: "/bo'lim-markazlar", text: "Bo’lim va markazlar" },
                            { to: "/rekvizitlar", text: "Rekvizitlar" },
                            { to: "/ochiq-ma'lumotlar", text: "Ochiq ma’lumotlar" },
                            { to: "/korrupsiyaga-kurash", text: "Korrupsiyaga qarshi kurashish" },
                            { to: "/hujjatlar", text: "Me’yoriy hujjatlar" },
                            { to: "/bosh-ish-orni", text: "Bo‘sh ish o‘rinlari" },
                            { to: "/xalqaro-aloqalar", text: "Xalqaro aloqalar" },
                            { to: "/hamkorlarimiz", text: "Hamkorlarimiz" },
                        ]
                    }].concat(data || []).map((section, index) => (
                        <ul key={index} className="border-b border-gray-600 pb-2">
                            <li
                                className="font-semibold mb-2 text-lg text-white cursor-pointer flex justify-between items-center"
                                onClick={() => toggleSection(index)}
                            >
                                {section?.title[i18n?.language]}
                                <svg
                                    className={`transform transition-transform duration-300 ${openSections[index] ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M30 12L16 24L2 12"></path></svg>
                            </li>
                            <ul className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                {section.details.map((link, idx) => (
                                    <NavLink onClick={onClose} key={idx} to={link.to || `/post/${link.id}`}>
                                        <li className="font-semibold text-base text-gray-400 hover:text-white transition-colors pl-4 py-1">
                                            {link.text || link.title[i18n?.language]}
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}
