import axios from "axios";
import counter from "../../img/Counter.png";
import { useEffect, useState } from "react";

export default function InstituteStats() {
  const [data, setData] = useState({});

  const getState = async () => {
    try {
      const response = await axios.get(`/universit-statistic`);
      setData(response?.data?.data[0] || {});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getState();
  }, []);



  return (
    <section className="relative bg-[#1f235b] text-white py-16">
      <div className="Container">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${counter})` }}
        ></div>

        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold">
            Institut faoliyati bo‘yicha raqamli statistika
          </h2>
          <p className="text-gray-300">
            Bugungi kunga qadar faoliyatimizga oid raqamlar bilan tanishishingiz
            mumkin
          </p>

          <div className="state_wr grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold mt-2">Talabalar soni</h4>
              <p className="cl_qw text-2xl font-bold">{data.students_count || 0}</p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold mt-2">
                Professor o‘qituvchilar
              </h4>
              <p className="cl_qw text-2xl font-bold">{data.professors_count || 0}</p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold mt-2">Fakultetlar soni</h4>
              <p className="cl_qw text-2xl font-bold">{data.faculties_count || 0}</p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold mt-2">Ta’lim yo‘nalishlari</h4>
              <p className="cl_qw text-2xl font-bold">{data.education_programs_count || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
