import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';
import { NavLink } from "react-router-dom";

export default function CenterHero() {


  const { i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  const FetchDataCenter = async () => {
    try {
      const response = await axios.get("/department-center?status=centers");
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  const FetchDataSection = async () => {
    try {
      const response = await axios.get("/department-center?status=sections");
      setData2(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false)
    }
  };

  useEffect(() => {
    FetchDataCenter();
    FetchDataSection();
  }, []);

  if (loading && loading2) {
    return (
      < div className="flex items-center justify-center w-full h-[400px]" >
        <ReactLoading type="spinningBubbles" color='#fffff' height={100} width={100} />
      </div >
    )
  }

  return (
    <section className="py-10 px-4 md:px-10 lg:px-20">
      <div className="Container">
        <h2 className="text-2xl text-[#0a0d12] font-bold text-gray-900 mb-6">Bo‘limlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((dept, index) => (
            <NavLink to={`/markazlar-bolimlar/${dept?.id}`}>
              <div
                key={index}
                className="center_wr  cursor-pointer max-x-[410px] w-[100%] duration-500 hover:shadow-lg hover:shadow-xl  h-[80px] border border-[#f5f5f5] rounded-lg shadow-sm bg-white flex items-center px-4"
              >
                <div className="border-l-4  border-[#a4a7ae] pl-4">
                  <span className="font-medium text-center text-[14px] text-[#181d27] mx-auto">
                    {dept?.title[i18n?.language]}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-[#0a0d12] mt-6 mb-6">Markazlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data2?.map((dept, index) => (
            <NavLink to={`/markazlar-bolimlar/${dept?.id}`}>
              <div
                key={index}
                className="max-x-[410px] w-[100%] hover:shadow-lg hover:shadow-xl duration-500 h-[64px] border border-[#f5f5f5] rounded-lg shadow-sm bg-white flex items-center px-4"
              >
                <div className="border-l-4  border-[#a4a7ae] pl-4">
                  <span className="font-medium text-center text-[14px] text-[#181d27] mx-auto">
                    {dept?.title[i18n?.language]}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
