import React, { useEffect, useState } from "react";
import calendar from '../../img/calendar.png';
import eye from '../../img/eye1.png';
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';
import img_def from '../../img/default_image.jpg';
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(`/news-all`);
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="news py-10 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="relative pb-4 mb-6">
        <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
          • Yangiliklar
        </h2>
        <div className="absolute left-0 top-150 w-full border-t border-[#1f235b] -z-10"></div>
        <div className="absolute left-0 top-150 w-1/4 border-t-2 border-[#1f235b] -z-10"></div>
        <NavLink
          to={'/barcha-yangiliklar'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <button className="button_new text-gray-700 font-medium hover:opacity-[0.7] duration-300 absolute right-0 top-0">
            Ko‘proq ko‘rish
          </button>
        </NavLink>
      </div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[400px]">
          <ReactLoading type="spinningBubbles" color='#fffff' height={100} width={100} />
        </div>
      ) : (
        data?.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {data.map((news) => (
              <NavLink
                key={news.id}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to={`/yangilik/${news?.id}`}
                className="bg-white overflow-hidden flex flex-col group"
                data-aos="fade-up"
              >
                <div className="overflow-hidden">
                  <img
                    src={news.image[0]?.url || img_def}
                    alt=""
                    className="news_img w-full h-[224px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col flex-grow mt-[10px]">
                  <div className="text-gray-500 text-sm flex items-center space-x-3">
                    <img src={calendar} alt="date" />
                    <span>{news?.date}</span>
                    <img src={eye} alt="views" />
                    <span>{news?.view}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 flex-grow line-clamp-2 mt-[17px] mb-[16px] duration-[500] group-hover:text-blue-600">
                    {news.title[i18n.language] || news.title["uz"]}
                  </h3>

                  <h3 className="overflow-hidden text-gray-500 text-[16px] font-normal line-clamp-2">
                    {news.description[i18n.language] || news.description["uz"]}
                  </h3>

                  <a href="#" className="text-black group-hover:text-blue-600 duration-500 mt-[16px] inline-block font-medium">
                    Batafsil →
                  </a>
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <h1>Ma'lumot yo'q</h1>
          </div>
        )
      )}
    </section>
  );
};

export default News;
