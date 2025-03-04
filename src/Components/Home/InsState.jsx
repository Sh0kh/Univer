import axios from "axios";
import counter from "../../img/FotoSt.png";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function InstituteStats() {
  const [data, setData] = useState({});
  const [counts, setCounts] = useState({
    students_count: 0,
    professors_count: 0,
    faculties_count: 0,
    education_programs_count: 0,
  });
  const { t } = useTranslation()
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

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

  useEffect(() => {
    if (!data.students_count) return;

    const animateNumbers = (target, key) => {
      let start = 0;
      const end = target;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = end / steps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.round(start) }));
      }, stepTime);
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateNumbers(data.students_count, "students_count");
        animateNumbers(data.professors_count, "professors_count");
        animateNumbers(data.faculties_count, "faculties_count");
        animateNumbers(data.education_programs_count, "education_programs_count");
        observerRef.current.disconnect();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
  }, [data]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(68, 76, 231, 0.2) 0%, #00044f 100%), url(${counter})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative text-white py-16"
    >
      <div className="Container">
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold">
            {t('Institutfaoliyatiboyicharaqamlistatistika')}
          </h2>
          <p className="text-gray-300">
            {t('Bugungikungaqadarfaoliyatimizgaoidraqamlarbilantanishishingizmumkin')}
          </p>

          <div className="state_wr grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { label: `${t('Talabalarsoni')}`, key: "students_count" },
              { label: `${t('ProfessorOqituvchilar')}`, key: "professors_count" },
              { label: `${t('Fakultetlarsoni')}`, key: "faculties_count" },
              { label: `${t('Talimyonalishlar')}`, key: "education_programs_count" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold mt-2">{item.label}</h4>
                <p className="cl_qw text-2xl font-bold">{counts[item.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}