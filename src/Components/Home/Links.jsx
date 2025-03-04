import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Mygov from "../../img/mygov.png";
import Hemis from "../../img/hemis.png";
import LinkCard from "./LinkCard";
import mn from "../../img/mn.png";
import { useTranslation } from "react-i18next";


export default function Links() {
  const { t } = useTranslation()


  return (
    <section className="links p-[80px]">
      <div className="Container">
        <div className="relative pb-4 mb-6">
          <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
            • {t('Foydalihavolalar')}
          </h2>
          <div className="absolute left-0 top-150 w-full border-t border-[#1f235b] -z-10"></div>
          <div className="absolute left-0 top-150 w-1/4 border-t-2 border-[#1f235b] -z-10"></div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="links_wr"
        >
          <SwiperSlide>
            <a href="https://my.gov.uz/ru" target="_blank" rel="noopener noreferrer">
              <div className="links_card h-[200px] p-4 bg-white shadow-md rounded-md">
                <img src={Mygov} className="mb-[10px]" alt="Foto" />
                <h1 className="text-lg font-bold">
                  {t('Yagonainteraktivdavlatxizmatlariportali')}
                </h1>
                <p className="text-sm text-gray-600">www.my.gov.uz/</p>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://stktiyf.e-edu.uz/dashboard/login" target="_blank" rel="noopener noreferrer">
              <div className="links_card h-[200px] p-4 bg-white shadow-md rounded-md">
                <img src={Hemis} className="h-[50px] mt-[25px] mb-[5px]" alt="Foto" />
                <h1 className="text-lg font-bold">
                  {t('Oliytalimjarayonlariniboshqarishaxborottizimi')}
                </h1>
                <p className="text-sm text-gray-600">hemis.uz</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://president.uz/oz" target="_blank" rel="noopener noreferrer">
              <div className="links_card h-[200px] p-4 bg-white shadow-md rounded-md">
                <LinkCard />
                <h1 className="text-lg font-bold">
                  {t('Ozbekistonrespublikasiprezidenti')}
                </h1>
                <p className="text-sm text-gray-600">president.uz</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://petition.gov.uz/uz" target="_blank" rel="noopener noreferrer">
              <div className="links_card h-[200px] p-4 bg-white shadow-md rounded-md">
                <img src={mn} className="h-[50px] mt-[25px] mb-[5px]" alt="Foto" />
                <h1 className="text-lg font-bold">
                  {t('Jamoaviymurojaatportali')}
                </h1>
                <p className="text-sm text-gray-600">petition.gov.uz</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
