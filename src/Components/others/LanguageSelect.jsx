import { useState } from "react";
import i18next from "i18next";

const languages = [
    { code: "uz", label: "UZ", flag: "\uD83C\uDDFA\uD83C\uDDFF" }, // Флаг Узбекистана 🇺🇿
    { code: "ru", label: "RU", flag: "\uD83C\uDDF7\uD83C\uDDFA" }, // Флаг России 🇷🇺
    { code: "en", label: "EN", flag: "\uD83C\uDDFA\uD83C\uDDF8" }, // Флаг США 🇺🇸
    { code: "kk", label: "KZ", flag: "\uD83C\uDDF0\uD83C\uDDFF" }, // Флаг Казахстана 🇰🇿
];

const LanguageSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(i18next.language || "ru");

    const changeLanguage = (code) => {
        i18next.changeLanguage(code);
        setSelectedLang(code);
        setIsOpen(false);
    };

    return (
        <div className="relative w-[80px]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-3 py-2 border rounded-lg shadow-sm bg-white text-sm text-gray-700 hover:bg-gray-50"
            >
                {languages.find((lang) => lang.code === selectedLang)?.flag} 
                {languages.find((lang) => lang.code === selectedLang)?.label}
            </button>

            {isOpen && (
                <ul className="absolute z-10 top-[40px] left-0 w-full bg-white shadow-lg rounded-lg border overflow-hidden">
                    {languages.map(({ code, label, flag }) => (
                        <li
                            key={code}
                            onClick={() => changeLanguage(code)}
                            className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-700"
                        >
                            {flag} {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelect;
