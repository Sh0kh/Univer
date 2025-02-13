import React from "react";
import calendar from '../../img/calendar.png'
import eye from '../../img/eye1.png'
import img from '../../img/image.png'
import img1 from '../../img/image (1).png'
import img2 from '../../img/image (2).png'




const newsData = [
  {
    id: 1,
    title: "“Scopus va Web of Science’da maqolalar chop etish” mavzusidagi seminar-trening bo‘lib o‘tdi.",
    date: "29.01.2025",
    views: "1 255",
    image: img,
    description:
      "2025-yil 28-yanvar kuni Toshkent kimyo-texnologiya institutida xorijiy professor-o‘qituvchilarimizdan biri...",
  },
  {
    id: 2,
    title: "Toshkent kimyo-texnologiya institutida talaba-yoshlarning bo‘sh vaqtlarini mazmunli o‘tkazish, bilimdonlik va kitobx...",
    date: "29.01.2025",
    views: "1 255",
    image: img1,
    description:
      "Mazkur tanlovda institutning eng faol va bilimli jamoalari: \"Kimyogar\", \"Sensatsiya\", \"Boburiylar\", \"Hu...",
  },
  {
    id: 3,
    title: "Toshkent kimyo-texnologiya instituti Biotexnologiya kafedrasi yosh olimlari, tayanch doktorantlari va magistrantlari...",
    date: "29.01.2025",
    views: "1 255",
    image: img2,
    description:
      "2025-yilning 20-yanvar sanasida ilmiy ishlar va innovatsiyalar bo‘yicha prorektor Pulatov Xayrulla Lut...",
  },
  {
    id: 4,
    title: "Ilmiy konferensiyada institutimiz talabalarining yutuqlari e’tirof etildi",
    date: "28.01.2025",
    views: "1 100",
    image:  img,
    description:
      "Toshkent kimyo-texnologiya instituti talabalarining ilmiy ishlari xalqaro miqyosda yuqori baholandi...",
  },
  {
    id: 5,
    title: "Talabalar orasida sport musobaqalari tashkil etildi",
    date: "27.01.2025",
    views: "980",
    image:img1,
    description:
      "Sport tadbirlari doirasida institutimizning eng faol jamoalari bellashuv olib bordi...",
  },
  {
    id: 6,
    title: "Institutda ekologiya bo‘yicha yangi loyiha ishga tushirildi",
    date: "26.01.2025",
    views: "890",
    image:img2,
    description:
      "Talabalar va professor-o‘qituvchilar ekologik loyihada ishtirok etmoqda...",
  },
];

const News = () => {
  return (
    <section className="news py-10 px-4 max-w-6xl mx-auto">
    <div className="relative pb-4 mb-6">
      <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
        • Yangiliklar
      </h2>
      <div className="absolute left-0 top-150 w-full border-t border-[#1f235b] -z-10"></div>
      <div className="absolute left-0 top-150 w-1/4 border-t-2 border-[#1f235b] -z-10"></div>
      <button className="button_new text-gray-700 font-medium hover:underline absolute right-0 top-0">
        Ko‘proq ko‘rish
      </button>
      
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {newsData.map((news) => (
        <div key={news.id} className="bg-white rounded-lg overflow-hidden flex flex-col">
          <img
            src={news.image}
            alt={news.title}
            className="news_img w-full h-244 object-cover rounded-lg"
          />
          <div className="p-4 flex flex-col flex-grow   ">
            <div className="text-gray-500 text-sm flex items-center space-x-3">
              <img src={calendar} alt="date"  />
              <span>{news.date}</span>
              <img src={eye} alt="views"  />
              <span>{news.views}</span>
            </div>
            <h3 className="font-semibold text-lg mt-2 mb-4 text-gray-900 flex-grow">{news.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{news.description}</p>
            <a href="#" className="text-black  inline-block font-medium hover:underline">
              Batafsil →
            </a>
          </div>
        </div>
      ))}
    </div> 
    <button className="button_news text-gray-700 font-medium hover:underline ">
        Ko‘proq ko‘rish
      </button>
  </section>
  );
};

export default News;