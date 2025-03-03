import { useTranslation } from "react-i18next";
import calendar from '../../img/calendar.png'
import eye from '../../img/eye1.png'
import img_def from '../../img/default_image.jpg'

export default function NewsHero({ data }) {
    const { i18n } = useTranslation();

    return (
        <section className="mt-[32px] ">
            <div className="Container">
                <h1 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold leading-[127%] text-[#181d27]">
                    {data?.title[i18n?.language]}
                </h1>
                <div className="text-gray-500 text-sm flex items-center space-x-3 mt-5 md:mt-6">
                    <img src={calendar} alt="date" className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{data?.date}</span>
                    <img src={eye} alt="views" className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{data?.view}</span>
                </div>
                <p className="overflow-hidden text-gray-500 mt-5 text-sm md:text-base lg:text-lg font-normal line-clamp-2">
                    {data?.description[i18n?.language]}
                </p>
                <img
                    src={data.image[0]?.url || img_def}
                    alt="Foto"
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg mt-4 md:mt-6 mb-8 object-cover"
                />
            </div>
        </section>
    );
}
