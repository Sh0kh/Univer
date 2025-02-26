import React, { useEffect, useState } from "react";
import calendar from '../../img/calendar.png'
import eye from '../../img/eye1.png'
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';
import img_def from '../../img/default_image.jpg'





const News = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true)


  const [data, setData] = useState([])

  const getNews = async () => {
    try {
      const response = await axios.get(`/news-all`)
      setData(response?.data?.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getNews()
  }, [])





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
      {loading ? (
        < div className="flex items-center justify-center w-full h-[400px]" >
          <ReactLoading type="spinningBubbles" color='#fffff' height={100} width={100} />
        </div >
      ) : (
        data?.length && true > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {data?.map((news) => (
              <div key={news.id} className="bg-white overflow-hidden flex flex-col">
                <img
                  src={news.image[0]?.url || img_def}
                  alt=""
                  className="news_img w-full h-244 object-cover"
                />

                <div className="p-4 flex flex-col flex-grow   ">
                  <div className="text-gray-500 text-sm flex items-center space-x-3">
                    <img src={calendar} alt="date" />
                    <span>{news?.created_at}</span>
                    <img src={eye} alt="views" />
                    <span>{news?.view}</span>
                  </div>
                  <h3 className="font-semibold text-lg   text-gray-900 flex-grow line-clamp-2 mt-[17px] mb-[16px]">
                    {news.title[i18n.language] || news.title["uz"]}
                  </h3>
                  <h3 className="overflow-hidden text-gray-500  text-[16px] font-normal line-clamp-2"
                  >
                    {news.description[i18n.language] || news.description["uz"]}
                  </h3>
                  <a href="#" className="text-black  mt-[16px] inline-block font-medium hover:underline">
                    Batafsil →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <h1>
              Empty data
            </h1>
          </div>
        )
      )}
      <button className="button_news text-gray-700 font-medium hover:underline ">
        Ko‘proq ko‘rish
      </button>
    </section>
  );
};

export default News;