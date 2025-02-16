import { NavLink } from 'react-router-dom'
import logo from  '../../img/Ratings badge.png'
export default function FooterMain(){
    return(
        <div className="footermain mt-[40px] flex items-center justify-between ">
            <div className=" mr-[150px]">
            <h1 className="text-lg font-bold text-[#ffff] ">Toshkent kimyo-texnologiya instituti <br /> Yangiyer filiali</h1>
            <p className="mb-[20px] mt-[10px] h-p text-sm text-gray-600">rasmiy veb sayti</p>
                <img src={logo} alt="" />
            </div>
            <div className="footermain_content flex items-center justify-between gap-[100px]">
                <ul>

                    <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                    UMUMIY MA’LUMOT
                      </li>
                      <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                      Biz haqimizda
                          </li>
                          <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                          Rahbariyat
                          </li>
                             <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                             Fakultet va kafedralar
                          </li>
                          <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                          Bo’lim va markazlar
                          </li>
                          <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                          Rekvizitlar
                          </li>
                          <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                          Direktor virtual qabulxonasi
                          </li>

                </ul>
                <ul>

 

      <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
      Ochiq ma’lumotlar
      </li>
         <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
         Korrupsiyaga qarshi kurashish
      </li>
      <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
      Me’yoriy nhujjatlar
      </li>
      <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
      Bo’sh ish o’rinlari
      </li>
      <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
      Xalqaro aloqalar
      </li>
      <li className="font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
      Hamkorlarimiz
      </li>

              </ul>
              <ul className='ul_main'>

                    <li className="font-[var(--font-family)] font-semibold text-[18px] leading-[156%] text-white">
                    BOG‘LANISH
                      </li>

                      <NavLink to="">
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7163 5.33154C14.693 5.52211 15.5907 5.9998 16.2944 6.70348C16.998 7.40716 17.4757 8.30481 17.6663 9.28154M13.7163 1.33154C15.7456 1.55698 17.6379 2.46572 19.0825 3.90855C20.5272 5.35138 21.4383 7.24255 21.6663 9.27154M9.89327 13.1946C8.69169 11.993 7.7429 10.6344 7.0469 9.18477C6.98704 9.06008 6.9571 8.99774 6.93411 8.91885C6.85238 8.63849 6.91108 8.29423 7.08109 8.0568C7.12894 7.98999 7.18609 7.93284 7.3004 7.81852C7.65001 7.46892 7.82481 7.29411 7.9391 7.11834C8.37009 6.45545 8.37009 5.60086 7.9391 4.93797C7.82481 4.7622 7.65001 4.58739 7.3004 4.23779L7.10553 4.04292C6.57409 3.51147 6.30837 3.24575 6.02299 3.10141C5.45543 2.81434 4.78516 2.81434 4.2176 3.10141C3.93222 3.24575 3.6665 3.51148 3.13506 4.04292L2.97742 4.20055C2.4478 4.73018 2.18299 4.99499 1.98074 5.35502C1.75632 5.75453 1.59496 6.37502 1.59632 6.83324C1.59755 7.24619 1.67765 7.52841 1.83786 8.09285C2.69883 11.1263 4.32331 13.9886 6.71129 16.3766C9.09927 18.7646 11.9616 20.389 14.995 21.25C15.5595 21.4102 15.8417 21.4903 16.2546 21.4916C16.7129 21.4929 17.3334 21.3316 17.7329 21.1071C18.0929 20.9049 18.3577 20.6401 18.8873 20.1105L19.045 19.9528C19.5764 19.4214 19.8421 19.1557 19.9865 18.8703C20.2735 18.3027 20.2735 17.6324 19.9865 17.0649C19.8421 16.7795 19.5764 16.5138 19.045 15.9823L18.8501 15.7875C18.5005 15.4379 18.3257 15.2631 18.1499 15.1488C17.487 14.7178 16.6324 14.7178 15.9695 15.1488C15.7938 15.2631 15.619 15.4379 15.2694 15.7875C15.155 15.9018 15.0979 15.9589 15.0311 16.0068C14.7936 16.1768 14.4494 16.2355 14.169 16.1538C14.0901 16.1308 14.0278 16.1008 13.9031 16.041C12.4535 15.345 11.0948 14.3962 9.89327 13.1946Z" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
                      <li className="qWE className='font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]'">
             + 998 95 123 00 00
                 </li>
                      </NavLink>
                     
                      <NavLink to="">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.66663 7.33154L10.8315 13.047C11.4927 13.5098 11.8233 13.7412 12.1829 13.8309C12.5005 13.91 12.8327 13.91 13.1504 13.8309C13.5099 13.7412 13.8405 13.5098 14.5017 13.047L22.6666 7.33154M7.46663 20.3315H17.8666C19.5468 20.3315 20.3869 20.3315 21.0286 20.0046C21.5931 19.7169 22.052 19.258 22.3396 18.6935C22.6666 18.0518 22.6666 17.2117 22.6666 15.5315V9.13154C22.6666 7.45139 22.6666 6.61131 22.3396 5.96957C22.052 5.40509 21.5931 4.94614 21.0286 4.65852C20.3869 4.33154 19.5468 4.33154 17.8666 4.33154H7.46663C5.78647 4.33154 4.94639 4.33154 4.30465 4.65852C3.74017 4.94614 3.28123 5.40509 2.99361 5.96957C2.66663 6.61131 2.66663 7.45139 2.66663 9.13154V15.5315C2.66663 17.2117 2.66663 18.0518 2.99361 18.6935C3.28123 19.258 3.74017 19.7169 4.30465 20.0046C4.94639 20.3315 5.78647 20.3315 7.46663 20.3315Z" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
<li className="flex items-center justify-between font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
              info@tktiyf.uz
                          </li>
                      </NavLink>

                         
                       <NavLink to="">
                       <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.66663 11.3315H17.2537C17.7161 11.3315 17.9474 11.3315 18.0795 11.2346C18.1946 11.15 18.2681 11.0202 18.2814 10.8779C18.2966 10.7148 18.1776 10.5165 17.9397 10.1199L15.9136 6.74314C15.8238 6.59349 15.7789 6.51866 15.7614 6.43879C15.7458 6.36813 15.7458 6.29495 15.7614 6.2243C15.7789 6.14442 15.8238 6.0696 15.9136 5.91995L17.9397 2.54314C18.1776 2.14657 18.2966 1.94829 18.2814 1.78514C18.2681 1.64288 18.1946 1.51309 18.0795 1.42852C17.9474 1.33154 17.7161 1.33154 17.2537 1.33154H1.66663L1.66663 19.3315" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
<li className="flex items-center justify-between font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
              
              100021
                                        </li>
                       </NavLink>
                           
 <NavLink to="">
 <svg className='svg-mini' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.6666 22.3315C13.6666 17.3315 20.6666 16.7498 20.6666 10.3315C20.6666 5.91326 17.0849 2.33154 12.6666 2.33154C8.24835 2.33154 4.66663 5.91326 4.66663 10.3315C4.66663 16.7498 11.6666 17.3315 12.6666 22.3315Z" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M12.6666 13.3315C14.3235 13.3315 15.6666 11.9884 15.6666 10.3315C15.6666 8.67469 14.3235 7.33154 12.6666 7.33154C11.0098 7.33154 9.66663 8.67469 9.66663 10.3315C9.66663 11.9884 11.0098 13.3315 12.6666 13.3315Z" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
  <li className="flex items-center justify-between font-[var(--font-family)] font-semibold text-[16px] leading-[150%] text-[#a4a7ae]">
                  
Sirdaryo viloyati, Yangiyer shahri, Mustaqillik ko’chasi 12A
                          </li>
 </NavLink>
                        
                        

                </ul>
            </div>
        </div>
    )
}