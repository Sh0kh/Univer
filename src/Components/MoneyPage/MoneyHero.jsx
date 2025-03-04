import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ReactLoading from "react-loading";
export default function MoneyHero() {

    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getInfo = async () => {
        try {
            const response = await axios.get(`/fighting-corruptions`);
            setData(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <section>
            <div className="Container">
                <div className="flex items-center justify-center my-[20px] flex-col gap-[24px] w-full">
                    {loading ? (
                        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
                    ) : data.length === 0 ? (
                        <h4 >Malumot yo'q</h4>
                    ) : (
                        data.map((item) => (
                            <div
                                key={item.id}
                                className="w-full border-[1px] px-[24px] py-[18px] bg-white cursor-pointer duration-500 hover:shadow-lg rounded-[8px] flex items-center gap-[10px] justify-between"
                            >
                                <div>
                                    <span>{item?.name?.[i18n.language] || "Noma’lum ma’lumot"}</span>
                                </div>
                                <a href={item?.url} target="_blank" rel="noopener noreferrer">
                                    <div className="text-[#A4A7AE] text-[30px]">
                                        <svg
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12"
                                                stroke="#A4A7AE"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        ))
                    )}
                </div>
                <div className="money_social">
                    <a className="social_card" href="https://www.youtube.com/channel/UCKSfVjm1xsSyCdbAB5kt7Uw" target="_blank" rel="noopener noreferrer">
                        <div>
                            <svg className="text-[50px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 4.15c-1.191 0-2.58.028-3.934.066l-.055.002c-1.378.039-2.49.07-3.366.215c-.913.151-1.671.44-2.277 1.063c-.608.625-.873 1.398-.998 2.323c-.12.89-.12 2.018-.12 3.42v1.524c0 1.4 0 2.528.12 3.419c.124.925.39 1.698.998 2.323c.606.624 1.364.912 2.277 1.063c.876.145 1.988.176 3.366.215l.055.002c1.355.038 2.743.066 3.934.066s2.58-.028 3.934-.066l.055-.002c1.378-.039 2.49-.07 3.366-.215c.913-.151 1.671-.44 2.277-1.063c.608-.625.874-1.398.998-2.323c.12-.89.12-2.018.12-3.42v-1.524c0-1.401 0-2.529-.12-3.419c-.124-.925-.39-1.698-.998-2.323c-.606-.624-1.364-.912-2.277-1.063c-.876-.145-1.988-.176-3.367-.215l-.054-.002A145 145 0 0 0 12 4.15m-1.128 10.501A.75.75 0 0 1 9.75 14v-4a.75.75 0 0 1 1.122-.651l3.5 2a.75.75 0 0 1 0 1.302z" clipRule="evenodd"></path></svg>
                            <h4 className="wer text-[14px] text-[#0a0d12]">{t('Shaxsiykanali')}</h4>
                        </div>
                    </a>
                    <a className="social_card" href="https://t.me/tkti_yangiyerf" target="_blank" rel="noopener noreferrer">
                        <div className="">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42 10L4 25L18 27M42 10L37 40L18 27M42 10L18 27M18 27V38L24.4976 31.4458" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h4 className="wer text-[14px] text-[#0a0d12]">{t('Telegrambot')}</h4>
                        </div>
                    </a>
                    <a className="social_card" href="tel:+">
                        <div >
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.7673 12C30.7208 12.3811 32.5161 13.3365 33.9234 14.7439C35.3308 16.1512 36.2862 17.9465 36.6673 19.9M28.7673 4C32.8258 4.45087 36.6105 6.26835 39.4998 9.15402C42.3891 12.0397 44.2113 15.822 44.6673 19.88M21.1213 27.7261C18.7181 25.323 16.8205 22.6057 15.4285 19.7065C15.3088 19.4571 15.2489 19.3324 15.2029 19.1746C15.0395 18.6139 15.1569 17.9254 15.4969 17.4505C15.5926 17.3169 15.7069 17.2026 15.9355 16.974C16.6347 16.2747 16.9843 15.9251 17.2129 15.5736C18.0749 14.2478 18.0749 12.5386 17.2129 11.2129C16.9843 10.8613 16.6347 10.5117 15.9355 9.81249L15.5458 9.42275C14.4829 8.35986 13.9515 7.82842 13.3807 7.53973C12.2456 6.96559 10.905 6.96559 9.76992 7.53973C9.19916 7.82842 8.66772 8.35987 7.60483 9.42275L7.28956 9.73802C6.23032 10.7973 5.70069 11.3269 5.2962 12.047C4.84736 12.846 4.52463 14.0869 4.52736 15.0034C4.52982 15.8293 4.69003 16.3937 5.01044 17.5226C6.73238 23.5894 9.98133 29.3141 14.7573 34.0901C19.5332 38.8661 25.258 42.115 31.3248 43.8369C32.4537 44.1574 33.0181 44.3176 33.844 44.32C34.7604 44.3228 36.0014 44 36.8004 43.5512C37.5205 43.1467 38.0501 42.6171 39.1094 41.5578L39.4246 41.2426C40.4875 40.1797 41.019 39.6482 41.3077 39.0775C41.8818 37.9423 41.8818 36.6018 41.3077 35.4667C41.019 34.8959 40.4875 34.3645 39.4246 33.3016L39.0349 32.9119C38.3357 32.2127 37.9861 31.863 37.6345 31.6345C36.3087 30.7725 34.5996 30.7725 33.2738 31.6345C32.9222 31.863 32.5726 32.2127 31.8734 32.9119C31.6448 33.1405 31.5305 33.2548 31.3969 33.3505C30.922 33.6905 30.2335 33.8079 29.6728 33.6445C29.515 33.5985 29.3903 33.5386 29.1409 33.4189C26.2417 32.0269 23.5244 30.1293 21.1213 27.7261Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h4 className="wer text-[14px] text-[#0a0d12]">+998 (95) 511 58 56</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}