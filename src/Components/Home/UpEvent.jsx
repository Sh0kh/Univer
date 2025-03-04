import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const CustomCalendar = () => {
  const today = new Date(); // Текущая дата
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [eventDates, setEventDates] = useState([]); // Массив дат событий
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()



  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const monthNames = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

    // Adjust first day to start with Monday (0) instead of Sunday (0)
    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const daysInPrevMonth = getDaysInMonth(
      currentMonth === 0 ? currentYear - 1 : currentYear,
      currentMonth === 0 ? 11 : currentMonth - 1
    );

    const days = [];

    // Previous month days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        currentMonth: false,
        date: new Date(
          currentMonth === 0 ? currentYear - 1 : currentYear,
          currentMonth === 0 ? 11 : currentMonth - 1,
          daysInPrevMonth - i
        )
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        date: new Date(currentYear, currentMonth, i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(
          currentMonth === 11 ? currentYear + 1 : currentYear,
          currentMonth === 11 ? 0 : currentMonth + 1,
          i
        )
      });
    }

    return days;
  };

  // Calendar days
  const calendarDays = generateCalendarDays();

  // Function to handle previous month
  const handlePrevMonth = () => {
    setSelectedDate(new Date(
      currentMonth === 0 ? currentYear - 1 : currentYear,
      currentMonth === 0 ? 11 : currentMonth - 1,
      1
    ));
  };

  // Function to handle next month
  const handleNextMonth = () => {
    setSelectedDate(new Date(
      currentMonth === 11 ? currentYear + 1 : currentYear,
      currentMonth === 11 ? 0 : currentMonth + 1,
      1
    ));
  };

  const isSelectedDay = (date) => {
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  // Проверяем, совпадает ли дата с сегодняшним днем
  const isToday = (date) => {
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  // Проверяем, есть ли событие на эту дату
  const hasEvent = (date) => {
    // Форматируем дату в формат "DD.MM.YYYY"
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
    // Проверяем, есть ли эта дата в массиве дат событий
    return eventDates.includes(formattedDate);
  };

  const formatSelectedDate = () => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return selectedDate.toLocaleDateString('en-US', options);
  };

  const fetchData = async () => {
    try {
      const response = await axios?.get(`scheduled-events`)
      setData(response?.data?.data)
      setData(response.data);
      if (response.data) {
        const dates = response.data?.data?.map(event => event.date);
        setEventDates(dates);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!document.querySelector(".Calendar")) return; // Если элемента нет — выходим

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const animation = gsap.from(".Calendar", {
      opacity: 0,
      x: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".Calendar",
        start: "top 98%", // Начало анимации, когда верх элемента достигает низа viewport
        end: "top 40%",
        markers: false, // Для отладки можно установить true
        scrub: 0.5, // Для плавной привязки к скроллу можно установить true или число (0.5)
      },
    });
    const animation2 = gsap.from(".CalCard", {
      opacity: 0,
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: ".CalCard",
        start: "top 98%", // Начало анимации, когда верх элемента достигает низа viewport
        end: "top 40%",
        markers: false, // Для отладки можно установить true
        scrub: 0.5, // Для плавной привязки к скроллу можно установить true или число (0.5)
      },
    });

    // Функция очистки
    return () => {
      animation.kill();
      animation2.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading]);

  if (loading) {
    return (
      < div className="flex items-center justify-center w-full h-[400px]" >
        <ReactLoading type="spinningBubbles" color='#fffff' height={100} width={100} />
      </div >
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
      <div className="Container">
        <div className="flex justify-between items-center pb-2 mb-4 border-b-2 border-gray-200 relative">
          <h2 className="text-xl font-semibold text-[#1f235b]">• {t('Kutilayotgantadbirlar')}</h2>
          <div className="absolute bottom-[-2px] left-0 w-20 h-[2px] bg-[#1f235b]"></div>
        </div>

        <div className="flex justify-between w-full flex-col md:flex-row gap-6">
          <div className="w-full CalCard">
            {data?.data?.map((event, index) => {
              const [day, month] = event.date.split(".");
              const monthShort = new Date(2025, parseInt(month) - 1).toLocaleString("en", { month: "short" }).toUpperCase();

              return (
                <div key={index} className="flex items-center border rounded-lg py-[22px] px-[20px] mb-3 shadow-sm w-[100%]">
                  <div className="bg-gray-200 text-center px-4 py-2 rounded-lg">
                    <p className="text-xl font-bold">{day}</p>
                    <p className="text-sm text-[#717680] font-medium">{monthShort}</p>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-end justify-between">
                      <p className="text-sm text-gray-500">
                        {event.start_time.slice(0, 5)}-{event.end_time.slice(0, 5)}
                      </p>
                      <span className="bg-[#ECFDF3] border-[1px] border-[#ABEFC6] text-green-600 px-3 py-1 rounded-[16px] text-sm mt-[-40px]">
                        {event.status[i18n?.language]}
                      </span>
                    </div>
                    <p className="text-md font-semibold mt-[10px]">{event.title[i18n?.language]}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="Calendar bg-white w-[350px] border-[1px] h-[500px] rounded-lg p-4 shadow-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={handlePrevMonth}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#A4A7AE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <h2 className="text-lg font-semibold text-gray-700">
                {monthNames[currentMonth]} {currentYear}
              </h2>
              <button
                className="text-gray-600 focus:outline-none"
                onClick={handleNextMonth}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="#A4A7AE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex mb-4 gap-2">
              <div className="bg-white rounded-lg p-2 flex-1 text-center border-[2px]">
                {formatSelectedDate()}
              </div>
              <div
                className="bg-white rounded-lg p-2 px-4 text-center border-[2px] cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedDate(new Date())}
              >
                {t('Bugun')}
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekdays.map((day, index) => (
                <div
                  key={index}
                  className="text-center text-sm font-medium py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 flex-grow">
              {calendarDays.map((day, index) => {
                const hasEventOnDay = hasEvent(day.date);
                const isTodayDay = isToday(day.date);

                return (
                  <div
                    key={index}
                    className={`relative text-center rounded-full w-8 h-8 mx-auto flex items-center justify-center my-2 cursor-pointer
                        ${day.currentMonth ? 'text-gray-700' : 'text-gray-400'}
                        ${isSelectedDay(day.date) ? 'bg-blue-600 text-white' : ''}
                        ${hasEventOnDay && !isSelectedDay(day.date) ? 'bg-[#e6e5e5] ' : ''}
                        ${isTodayDay && !isSelectedDay(day.date) ? 'border-2 border-green-500' : ''}
                      `}
                    onClick={() => setSelectedDate(day.date)}
                  >
                    {day.day}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto py-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;