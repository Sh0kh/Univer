import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import foto from '../../img/Footer.png';
import { useTranslation } from "react-i18next";

export default function BigModal({ isOpen, onClose, IsScroll, data }) {
  const [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      window.addEventListener("scroll", handleScroll);
    } else {
      setVisible(false);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    onClose();
  };

  return (
    <div
      className={`big_modal fixed left-0 right-0 bottom-0 ${IsScroll ? "" : "!top-[160px]"} z-[100000] bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${foto})`,
        transform: visible ? "translateX(0)" : "translateX(-200%)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="Container p-6 md:p-8">
        {/* Кнопка закрытия */}
        <svg
          onClick={onClose}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M24 8L8 24M8 8L24 24"
            stroke="#A4A7AE"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Контент модального окна */}
        <div className="modal_wr grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <ul>
            <li className="font-semibold mb-4 text-lg text-white">UMUMIY MA’LUMOT</li>
            {[
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
            ].map((link, index) => (
              <NavLink onClick={handleClose} key={index} to={link.to}>
                <li className="font-semibold text-base text-gray-400 hover:text-white transition-colors">
                  {link.text}
                </li>
              </NavLink>
            ))}
          </ul>
          {data?.map((i, index) => (
            <ul key={index}>
              <li className="font-semibold mb-4 text-lg text-white">
                {i?.title[i18n?.language]}
              </li>
              {i?.details?.map((link, idx) => (
                <NavLink onClick={handleClose} key={idx} to={`/post/${link?.id}`}>
                  <li className="font-semibold text-base text-gray-400 hover:text-white transition-colors">
                    {link.title[i18n?.language]}
                  </li>
                </NavLink>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
