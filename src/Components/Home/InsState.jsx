import axios from "axios";
import counter from "../../img/Counter.png";
import { useEffect, useState, useRef } from "react";

export default function InstituteStats() {
  const [data, setData] = useState({});
  const [counts, setCounts] = useState({
    students_count: 0,
    professors_count: 0,
    faculties_count: 0,
    education_programs_count: 0,
  });
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
        backgroundImage: `url(${counter})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative text-white py-16"
    >
      <div className="Container">
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold">
            Institut faoliyati bo‘yicha raqamli statistika
          </h2>
          <p className="text-gray-300">
            Bugungi kunga qadar faoliyatimizga oid raqamlar bilan tanishishingiz mumkin
          </p>

          <div className="state_wr grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { label: "Talabalar soni", key: "students_count" },
              { label: "Professor o‘qituvchilar", key: "professors_count" },
              { label: "Fakultetlar soni", key: "faculties_count" },
              { label: "Ta’lim yo‘nalishlari", key: "education_programs_count" }
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