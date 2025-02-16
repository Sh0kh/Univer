import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LinkCard from "./LinkCard";

// // Custom pagination component
// const CustomPagination = (index, className) => {
//   return `<span class="${className}">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="12" cy="12" r="6" fill="${className.includes('swiper-pagination-bullet-active') ? '#4338CA' : '#D1D5DB'}"/>
//               <circle cx="12" cy="12" r="10" stroke="${className.includes('swiper-pagination-bullet-active') ? '#4338CA' : '#D1D5DB'}" fill="none"/>
//             </svg>
//           </span>`;
// };

export default function Links() {
  const linksData = [
    {
      id: 1,
      title: "O‘zbekiston Respublikasi hukumat portali",
      url: "www.gov.uz",
    },
    {
      id: 2,
      title: "Elektron hukumat tizimi",
      url: "www.e-gov.uz",
    },
    {
      id: 3,
      title: "Davlat xizmatlari markazi",
      url: "www.dxm.uz",
    },
    {
        id: 4,
        title: "Davlat xizmatlari markazi",
        url: "www.dxm.uz",
        
      },
      {
        id: 5,
        title: "Davlat xizmatlari markazi",
        url: "www.dxm.uz",
      },
      {
        id: 6,
        title: "Davlat xizmatlari markazi",
        url: "www.dxm.uz",
      },
      {
        id: 7,
        title: "Davlat xizmatlari markazi",
        url: "www.dxm.uz",
      },
      
      {
        id: 8,
        title: "Davlat xizmatlari markazi",
        url: "www.dxm.uz",
      },
      {
        id: 9,
        title: "Davlat xizmatlari markazi",
        url: "www.dxm.uz",
      },
  ];

  return (
    <section className="links p-[80px]">
      <div className="Container">
        <div className="relative pb-4 mb-6">
          <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
            • Interaktiv xizmatlar
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
            300:{
              slidesPerView: 1, 
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="links_wr"
        >
          {linksData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="links_card h-[200px] p-4 bg-white shadow-md rounded-md">
                <LinkCard />
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-sm text-gray-600">{item.url}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
