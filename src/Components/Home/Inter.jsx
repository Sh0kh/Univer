import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';


  export default function Inter() {
    

  const [data, setData] = useState([])
  const { i18n } = useTranslation(); // Получаем текущий язык
  const [loading, setLoading] = useState(true)
  const getInterService = async () => {
    try {
      const response = await axios.get(`/interactives-service`)
      setData(response?.data?.data)
    console.log(response);

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  }
  useEffect(() => {
    getInterService()
  }, [])

    return (
      <section className="inter p-[60px]">
        <div className="Container">
          <div className="relative pb-4 mb-6">
            <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
              • Interaktiv xizmatlar
            </h2>
            <div className="absolute left-0 top-150 w-full border-t border-[#1f235b] -z-10"></div>
            <div className="absolute left-0 top-150 w-1/4 border-t-2 border-[#1f235b] -z-10"></div>
          </div>
  
          <div className="inter_wr grid grid-cols-2   gap-[40px] ">
            {data?.map((item) => (
              <div key={item.id} className=" inter_card hover:shadow-lg hover:shadow-xl duration-500 w-[auto] ">
                <div className="img_c w-[52px] h-[52px] bg-[#1f235b] p-[14px]">
                  <img src={item?.image?.url} alt="" />
                </div>
                <h4>{item?.title[i18n.language] || news.title["uz"]}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  