import glass from '../img/glass.png';
import eye from '../img/eye.png';
import sound from '../img/sound.png';
import logo from '../img/logo.png';
import call from '../img/call.png';
import email from '../img/email.png';
import location from '../img/locotion.png';

import burger from '../img/More.png';

export default function Header() {
    return (

        <header className="bg-white shadow-md">
          
      <div className="Container">
      <div className="flex justify-between items-center py-3 border-b">
            <ul className="flex space-x-4 text-sm text-gray-600">
                <li>Hemis</li>
                <li>Qabul kunlari</li>
                <li>Murojaatlar</li>
                <li>Davlat ramzlari</li>
            </ul>
            <div className="flex space-x-2">
                <button><img src={glass} alt="Search"  /></button>
                <button><img src={eye} alt="Visibility"  /></button>
                <button><img src={sound} alt="Sound"  /></button>
                <select className="border rounded px-2 py-1 text-sm">
                    <option value="1">Uz</option>
                    <option value="2">Ru</option>
                    <option value="3">En</option>
                </select>
            </div>
        </div>
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
                <img  src={logo} alt="Logo" className="mr-[20px]" />
                <div>
                    <h1 className="h-h1 text-lg font-bold text-[#1f235b] ">Toshkent kimyo-texnologiya instituti <br /> Yangiyer filiali</h1>
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
        <nav className=" w-full   bg-[#002266] text-white py-3 px-4 rounded p-[16px]">
          <div className="Container flex items-center  gap-[44px]">
          <img src={burger} alt="Menu" />
          <div className="menu_wr">
          <a href="#" className="hover:underline">Umumiy ma’lumot</a>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
     </svg>
          </div>
          <div className="menu_wr">
          <a href="#" className="hover:underline">Qabul 2024-2025</a>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
          </div>
          <div className="menu_wr">
          <a href="#" className="hover:underline">Ta’lim</a>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
     </svg>
          </div>
          <div className="menu_wr">
          <a href="#" className="hover:underline">Ilm-fan</a>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
          </div>
          <div className="menu_wr">
          <a href="#" className="hover:underline">Talabalarga</a>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
          </div>

            <a href="#" className="hover:underline">Axborot xizmati</a>
            <a href="#" className="hover:underline">Bog‘lanish</a>
          </div>
        </nav>
</header>
     
    );
}