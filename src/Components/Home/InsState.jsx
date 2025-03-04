import axios from "axios";
import counter from "../../img/Counter.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InstituteStats() {
  const [data, setData] = useState({});
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

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
    const section = sectionRef.current;

    // Параллакс-эффект фона
    gsap.to(section, {
      backgroundPositionY: "50%",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Анимация чисел
    countersRef.current.forEach((el) => {
      if (!el) return; // Проверка на null

      const targetValue = parseInt(el.dataset.value, 10);
      if (el.innerText !== "0") return; // Если уже есть значение, не перезапускать анимацию

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
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
              { label: "Talabalar soni", value: data.students_count },
              { label: "Professor o‘qituvchilar", value: data.professors_count },
              { label: "Fakultetlar soni", value: data.faculties_count },
              { label: "Ta’lim yo‘nalishlari", value: data.education_programs_count },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold mt-2">{item.label}</h4>
                <p
                  ref={(el) => (countersRef.current[index] = el)}
                  data-value={item.value || 0}
                  className="cl_qw text-2xl font-bold"
                >
                  {item.value || 0}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
