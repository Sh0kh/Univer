import { useState } from "react";
import { NavLink } from "react-router-dom";
import foto from "../../img/Footer.png";
import { useTranslation } from "react-i18next";

export default function PhoneHeaderModal({ isOpen, onClose, data }) {
    const { t, i18n } = useTranslation();
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (key) => {
        setOpenSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const staticSections = [
        {
            title: { uz: "UMUMIY MA’LUMOT", ru: "ОБЩАЯ ИНФОРМАЦИЯ", en: "GENERAL INFORMATION", kk: "一般資訊" },
            details: [
                { to: "/biz-haqimizda", text: t("biz_haqimizda") },
                { to: "/rahbariyat", text: t("rahbariyat") },
                { to: "/hamkorlarimiz", text: t("hamkorlarimiz") },
                { to: "/hujjatlar", text: t("hujjatlar") },
                { to: "/murojaatlar", text: t("murojaatlar") },
                { to: "/ochiq-ma'lumotlar", text: t("ochiq_malumotlar") },
                { to: "/bo'lim-markazlar", text: t("bolim_markazlar") },
                { to: "/rekvizitlar", text: t("rekvizitlar") },
                { to: "/virtual-kabinet", text: t("virtual_kabinet") },
                { to: "/korrupsiyaga-kurash", text: t("korrupsiya_kurash") },
                { to: "/bosh-ish-orni", text: t("bosh_ish_orni") },
            ],
        },
    ];

    return (
        <div
            className="PhoneModal fixed left-0 right-0 bottom-0 z-[100000] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${foto})`,
                transform: isOpen ? "translateX(0)" : "translateX(-200%)",
                transition: "transform 0.5s ease-in-out",
            }}
        >
            <div className="Container">
                <svg
                    onClick={onClose}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer mb-[20px]"
                >
                    <path d="M24 8L8 24M8 8L24 24" stroke="#A4A7AE" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="modal_wr grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

                    {/* Отдельный рендеринг статичных секций */}
                    {staticSections.map((section, index) => {
                        const sectionKey = `static-${index}`;
                        return (
                            <ul key={sectionKey} className="border-b border-gray-600 pb-2">
                                <li
                                    className="font-semibold mb-2 text-lg text-white cursor-pointer flex justify-between items-center"
                                    onClick={() => toggleSection(sectionKey)}
                                >
                                    {section?.title[i18n?.language]}
                                    <svg
                                        className={`transform transition-transform duration-300 ${openSections[sectionKey] ? "rotate-180" : "rotate-0"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 32 32"
                                    >
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M30 12L16 24L2 12"></path>
                                    </svg>
                                </li>
                                <ul
                                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[sectionKey] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {section.details.map((link, idx) => (
                                        <NavLink
                                            key={idx}
                                            to={link.to}
                                            onClick={() => {
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                                onClose();
                                            }}
                                        >
                                            <li className="font-semibold text-base text-gray-400 hover:text-white transition-colors pl-4 py-1">
                                                {link.text}
                                            </li>
                                        </NavLink>
                                    ))}
                                </ul>
                            </ul>
                        );
                    })}

                    {/* Отдельный рендеринг data */}
                    {data?.map((section, index) => {
                        const sectionKey = `data-${index}`;
                        return (
                            <ul key={sectionKey} className="border-b border-gray-600 pb-2">
                                <li
                                    className="font-semibold mb-2 text-lg text-white cursor-pointer flex justify-between items-center"
                                    onClick={() => toggleSection(sectionKey)}
                                >
                                    {section?.title[i18n?.language]}
                                    <svg
                                        className={`transform transition-transform duration-300 ${openSections[sectionKey] ? "rotate-180" : "rotate-0"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 32 32"
                                    >
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M30 12L16 24L2 12"></path>
                                    </svg>
                                </li>
                                <ul
                                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[sectionKey] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {section.details.map((link, idx) => {
                                        const customPath =
                                            link.id === 11 ? "/Fotogalereya" :
                                                link.id === 8 ? "/Videogalereya" :
                                                link.id === 13 ? "/barcha-yangiliklar" :
                                                    `/sahifa/${link.id}`;

                                        return (
                                            <NavLink
                                                key={idx}
                                                to={customPath}
                                                onClick={() => {
                                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                                    onClose();
                                                }}
                                            >
                                                <li className="font-semibold text-base text-gray-400 hover:text-white transition-colors pl-4 py-1">
                                                    {link.text || link.title[i18n?.language]}
                                                </li>
                                            </NavLink>
                                        );
                                    })}
                                </ul>
                            </ul>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}
