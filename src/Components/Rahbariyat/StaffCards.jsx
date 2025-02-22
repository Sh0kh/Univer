import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ReactLoading from "react-loading"; 
import fr4 from "../../img/Group 55.png";
import img_def from '../../img/person.jpg'
export default function StaffCards() {
  const { i18n } = useTranslation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getManagement = async () => {
    try {
      const response = await axios.get(`/managements`);
      setData(response?.data?.data || []);
    } catch (error) {
      console.error("Ma'lumotni olishda xatolik:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getManagement();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-6">
      {loading ? (
        <div className="flex items-center justify-center w-full h-[400px]">
          <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
        </div>
      ) : data.length > 0 ? (
        data.map((person, index) => (
          <div
            key={index}
            className="staff_wr flex items-center bg-white shadow-md rounded-xl p-6 space-x-6 border border-gray-200 mb-[20px]"
          >
            <img
              src={person?.image?.url || img_def}
              alt={person?.name}
              className="w-[176px] h-[214px] object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-[10px]">
                {person?.name}
              </h2>
              <p className="staff_position text-gray-600">
                {person?.position[i18n.language] || person?.position["uz"]}
              </p>
              <div className="staff_soci text-gray-700 space-y-4 mt-[30px]">
                <p className="flex items-center gap-[10px]">
                  <span className="font-medium">Qabul kunlari:</span> {person?.reception_days}
                </p>
                <p className="flex items-center gap-[10px]">
                  <span className="font-medium">Telefon:</span> {person?.phone}
                </p>
                <p className="flex items-center gap-[10px]">
                  <span className="font-medium">Email:</span> {person?.email}
                </p>
              </div>
            </div>
            <img className="fr4" src={fr4} alt="" />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Hozircha ma'lumot yo‘q.</p>
      )}
    </div>
  );
}
