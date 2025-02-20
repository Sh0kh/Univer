import { NavLink } from "react-router-dom";

export default function BigModal({ go }) {
  return (
    <div className="big_modal">
      <div className="Container">
        {/* Modalni yopish tugmasi */}
        <svg
          onClick={() => {
            console.log("Modal yopildi"); // Konsolda tekshirish uchun
            go(); // `go` funksiyasini chaqiramiz
          }}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8L8 24M8 8L24 24"
            stroke="#A4A7AE"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="modal_wr flex items-center justify-between gap-[100px]">
          <ul>
            <li className="font-[var(--font-family)] font-semibold mb-[20px] text-[18px] leading-[156%] text-white">
              UMUMIY MA’LUMOT
            </li>
            <NavLink to="/aboutus">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Biz haqimizda
              </li>
            </NavLink>
            <NavLink to="/staff">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Rahbariyat
              </li>
            </NavLink>
          
            <NavLink to="/center">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Bo’lim va markazlar
              </li>
            </NavLink>
            <NavLink to="/rekvisits">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Rekvizitlar
              </li>
            </NavLink>
            <NavLink to="/cabinet">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Direktor virtual qabulxonasi
              </li>
            </NavLink>
            <NavLink to="/openInfo">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Ochiq ma’lumotlar
              </li>
            </NavLink>
            <NavLink to="/money">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Korrupsiyaga qarshi kurashish
              </li>
            </NavLink>
            <NavLink to="/inspectDocument">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Murojaatlarni ko‘rib chiqish tartibi
              </li>
            </NavLink>
            <NavLink to="/documents">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Me’yoriy hujjatlar
              </li>
            </NavLink>
            <NavLink to="/work">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Bo‘sh ish o‘rinlari
              </li>
            </NavLink>
            <NavLink to="/International">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Xalqaro aloqalar
              </li>
            </NavLink>
            <NavLink to="/partners">
              <li className="font-semibold text-[16px] text-[#a4a7ae]">
                Hamkorlarimiz
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
