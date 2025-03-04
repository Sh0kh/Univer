import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Inter() {
  const [data, setData] = useState([]);
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef([]);
  const { t } = useTranslation()

  const getInterService = async () => {
    try {
      const response = await axios.get(`/interactives-service`);
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInterService();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".inter_card",
            start: "top 60%",
          }
        }
      );
    }
  }, [data]);

  return (
    <section className="inter p-[60px]">
      <div className="Container">
        <div className="relative pb-4 mb-6">
          <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
            • {t('Interaktivxizmatlar')}
          </h2>
          <div className="absolute left-0 top-150 w-full border-t border-[#1f235b] -z-10"></div>
          <div className="absolute left-0 top-150 w-1/4 border-t-2 border-[#1f235b] -z-10"></div>
        </div>
        {
          loading ? (
            <div className="flex items-center justify-center w-full h-[400px]">
              <ReactLoading type="spinningBubbles" color='#1f235b' height={100} width={100} />
            </div>
          ) : (
            data?.length > 0 ? (
              <div className="inter_wr grid grid-cols-2 gap-[40px]">
                {data?.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="inter_card hover:shadow-xl duration-500 w-[auto] opacity-0"
                  >
                    <div className="img_c w-[70px]  bg-[#1f235b] py-[14px]">
                      <img src={item?.image[0]?.url} className=" h-[40px] w-full object-cover" alt="" />
                    </div>
                    <h4>{item?.title[i18n.language] || item?.title['uz']}</h4>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <h1>Malumot yo'q</h1>
              </div>
            )
          )
        }
      </div>
    </section>
  );
}
