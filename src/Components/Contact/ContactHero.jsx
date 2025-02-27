import { useEffect, useRef } from "react";

export default function ContactHero() {
    const fileInputRef = useRef(null);

    const handleClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
    };

  return (
    <section className="contact py-10">
      <div className="Container">
        <div className="contact_title  mb-10">
          <h1 className="font-semibold text-[36px] leading-[122%] mb-2 tracking-[-0.02em] text-[#181d27]">
            Savollaringizni yo‘llang
          </h1>
          <p className="font-normal text-[20px] leading-[150%] text-[#535862]">
            Biz tez orada siz bilan bog‘lanamiz
          </p>
        </div>
        <div className="contact_map flex flex-col md:flex-row items-center  gap-10">
          <div className="w-full md:w-1/3 space-y-11">
            <div className="flex items-center gap-6">
              <div className="w-[48px] h-[48px] flex items-center border-[8px] border-[#eef4ff] rounded-[28px] bg-[#e0eaff]">
              <svg width="22" className="mx-auto "  height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z" stroke="#444CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
              </div>

              <div className="info">
                <h3 className="mb-[10px] text-lg font-semibold text-[#181d27]">Email</h3>
                <p className="text-[#535862] text-[16px]">info@domain.uz</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-[48px] h-[48px] flex items-center border-[8px] border-[#eef4ff] rounded-[28px] bg-[#e0eaff]">
              <svg width="24" className="mx-auto "  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z" stroke="#444CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z" stroke="#444CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
              </div>
              <div  className="info">
                <h3 className="mb-[10px] text-lg font-semibold text-[#181d27]">Manzil</h3>
                <p className="text-[#535862] text-[16px]">
                  <a href="https://goo.gl/maps/yourlocation" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    Sirdaryo viloyati, Yangiyer shahri, Mustaqillik ko‘chasi 12A
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-[48px] h-[48px] flex items-center border-[8px] border-[#eef4ff] rounded-[28px] bg-[#e0eaff]">
              <svg width="22" className="mx-auto "  height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.38028 7.85323C8.07627 9.30285 9.02506 10.6615 10.2266 11.8631C11.4282 13.0646 12.7869 14.0134 14.2365 14.7094C14.3612 14.7693 14.4235 14.7992 14.5024 14.8222C14.7828 14.904 15.127 14.8453 15.3644 14.6752C15.4313 14.6274 15.4884 14.5702 15.6027 14.4559C15.9523 14.1063 16.1271 13.9315 16.3029 13.8172C16.9658 13.3862 17.8204 13.3862 18.4833 13.8172C18.6591 13.9315 18.8339 14.1063 19.1835 14.4559L19.3783 14.6508C19.9098 15.1822 20.1755 15.448 20.3198 15.7333C20.6069 16.3009 20.6069 16.9712 20.3198 17.5387C20.1755 17.8241 19.9098 18.0898 19.3783 18.6213L19.2207 18.7789C18.6911 19.3085 18.4263 19.5733 18.0662 19.7756C17.6667 20 17.0462 20.1614 16.588 20.16C16.1751 20.1588 15.8928 20.0787 15.3284 19.9185C12.295 19.0575 9.43264 17.433 7.04466 15.045C4.65668 12.6571 3.03221 9.79471 2.17124 6.76131C2.01103 6.19687 1.93092 5.91464 1.9297 5.5017C1.92833 5.04347 2.08969 4.42298 2.31411 4.02348C2.51636 3.66345 2.78117 3.39863 3.3108 2.86901L3.46843 2.71138C3.99987 2.17993 4.2656 1.91421 4.55098 1.76987C5.11854 1.4828 5.7888 1.4828 6.35636 1.76987C6.64174 1.91421 6.90747 2.17993 7.43891 2.71138L7.63378 2.90625C7.98338 3.25585 8.15819 3.43065 8.27247 3.60643C8.70347 4.26932 8.70347 5.1239 8.27247 5.78679C8.15819 5.96257 7.98338 6.13738 7.63378 6.48698C7.51947 6.60129 7.46231 6.65845 7.41447 6.72526C7.24446 6.96269 7.18576 7.30695 7.26748 7.5873C7.29048 7.6662 7.32041 7.72854 7.38028 7.85323Z" stroke="#444CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
              </div>
              <div  className="info">
                <h3  className="mb-[10px] text-lg font-semibold text-[#181d27]">Telefon</h3>
                <p className="text-[#535862] text-[16px]">info@tkityf.uz</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-2/3">
  <iframe
    className="w-full h-[300px] md:h-[350px] rounded-lg shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.812817206053!2d68.78703817509438!3d40.491661450515594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae9be40f4ebdbf%3A0x3b60b30ddbb69e69!2sGuliston%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

        </div>
        <div className="cb-or mt-[100px] relative pb-4 flex items-center justify-start gap-[30px] pt-[20px]  mb-6 mt-[20px]">
            <h4 className="mt-[-20px] font-semibold text-[14px] leading-[143%] text-[#3538cd]">
            Murojaat yuborish
            </h4>
            <h4 className="mt-[-20px] font-semibold text-[14px] leading-[143%] text-[#717680]">
            Murojaatni tekshirish
            </h4>  
            <h4 className="mt-[-20px] font-semibold text-[14px] leading-[143%] text-[#717680]">
            Ommaviy oferta
            </h4>
            <div className="absolute left-0 top-150 w-full border-t border-[#f5f5f5] -z-10"></div>
            <div className="absolute left-0 top-150 w-[113px] border-t-2 border-[#3538cd] -z-10"></div>
          </div>

            <div className="cabinet_wr grid grid-cols-3  gap-[50px]">
                <div className="cabinet_card  mr-[30px] ">
                    <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                    Viloyat
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                    <div className=' hover:shadow-lg hover:shadow-xl flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%]shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white'>
                    <input type="text" className='active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]'  placeholder='Tanlang'/>

                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#717680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                    Tuman
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                    <div className='hover:shadow-lg hover:shadow-xl flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white'>
                    <input type="text" className='active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]'  placeholder='Tanlang'/>

                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#717680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                Shahar
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                    <div className='hover:shadow-lg hover:shadow-xl flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white'>
                    <input type="text" className='active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]'  placeholder='Tanlang'/>

                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#717680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                 F.I.Sh
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                    <div className='hover:shadow-lg hover:shadow-xl flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%]shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white'>
                    <input type="text" className='active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]'  placeholder='Kiriting'/>

                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#717680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                  Telefon
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                    <div className='hover:shadow-lg hover:shadow-xl flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] h-[44px] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white'>
                    <input type="text" className='active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]'  placeholder='+998'/>

                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#717680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                   Email
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                    <div className='hover:shadow-lg hover:shadow-xl flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white'>
                    <input type="text" className='active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]'  placeholder='example@gmail.com'/>

                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#717680" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    </div>
                </div>
            </div>
            <div className="cabinet_area mt-[40px]">

                <div className="area_wr flex items-center justify-start gap-[10px] ">
                <h4 className='font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]'>
                  Xabar matni
                        <span className='text-[#444ce7]'>*</span>
                    </h4>
                <svg width="16" height="16" className='mt-[-10px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4059_3273)">
    <path d="M6.05967 5.99998C6.21641 5.55442 6.52578 5.17872 6.93298 4.9394C7.34018 4.70009 7.81894 4.61261 8.28446 4.69245C8.74998 4.7723 9.17222 5.01433 9.47639 5.37567C9.78057 5.737 9.94705 6.19433 9.94634 6.66665C9.94634 7.99998 7.94634 8.66665 7.94634 8.66665M7.99967 11.3333H8.00634M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z" stroke="#A4A7AE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_4059_3273">
      <rect width="16" height="16" fill="white" />
    </clipPath>
  </defs>
</svg>
                </div>
          
                    <input   className="w-full max-w-[1280px] h-[154px] border border-[#f5f5f5] rounded-lg p-[12px_14px] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white" type="text" placeholder='Kiriting'/>
                    <div className="cabinet_file mt-[40px]" onClick={handleClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".doc,.pdf,.xls"
        onChange={handleFileChange}
      />
      <div className="file_svg">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613"
            stroke="#535862"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="file_h1">
        <span>Kerakli faylni bu yerga</span> bosish orqali yuklang <br />
        .DOC, .PDF, .XLS (max. 5 MB)
      </h1>
    </div>

                    <button className='file_sent'>Yuborish</button>
            </div>
      </div>
    </section>
  );
}
