import React, { useState } from "react";

const CustomCalendar = () => {
  // Current selected date (January 10, 2025 as shown in the image)
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 10));

  // Get current month and year
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  // Function to get days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Days of the week
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Month names in Uzbek (based on "Yanvar" from the image)
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

  // Check if a day is selected
  const isSelectedDay = (date) => {
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  // Function to format date as shown in the image (Jan 10, 2025)
  const formatSelectedDate = () => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return selectedDate.toLocaleDateString('en-US', options);
  };

  // Events data
  const events = [
    { date: "10", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" },
    { date: "11", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" },
    { date: "11", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" },
    { date: "12", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="container">
        <div className="flex justify-between items-center pb-2 mb-4 border-b-2 border-gray-200 relative">
          <h2 className="text-xl font-semibold text-[#1f235b]">• Kutilayotgan tadbirlar</h2>
          <a href="#" className="text-[#1f235b] font-medium">Ko'proq ko'rish</a>
          <div className="absolute bottom-[-2px] left-0 w-20 h-[2px] bg-[#1f235b]"></div>
        </div>

        <div className="flex justify-between w-full flex-col md:flex-row gap-6">
          <div className="w-full ">
            {events.map((event, index) => (
              <div key={index} className="flex items-center border rounded-lg p-4 mb-3 shadow-sm w-[100%]">
                <div className="bg-gray-200 text-center px-4 py-2 rounded-lg">
                  <p className="text-xl font-bold">{event.date}</p>
                  <p className="text-sm font-medium">{event.month}</p>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm text-gray-500">{event.time}</p>
                  <p className="text-md font-semibold">{event.title}</p>
                </div>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-sm mt-[-40px]">{event.status}</span>
              </div>
            ))}
          </div>

          <div className="">
            <div className="bg-white w-[350px] h-[500px] rounded-lg p-4 shadow-md flex flex-col">
              {/* Calendar header */}
              <div className="flex justify-between items-center mb-4">
                <button
                  className="text-gray-600 focus:outline-none"
                  onClick={handlePrevMonth}
                >
                  &lt;
                </button>
                <h2 className="text-lg font-semibold text-gray-700">
                  {monthNames[currentMonth]} {currentYear}
                </h2>
                <button
                  className="text-gray-600 focus:outline-none"
                  onClick={handleNextMonth}
                >
                  &gt;
                </button>
              </div>

              {/* Date display */}
              <div className="flex mb-4 gap-2">
                <div className="bg-white rounded-lg p-2 flex-1 text-center border-[2px]">
                  {formatSelectedDate()}
                </div>
                <div className="bg-white rounded-lg p-2 px-4 text-center border-[2px]">
                  Bugun
                </div>
              </div>

              {/* Weekdays */}
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

              {/* Calendar days - with increased spacing */}
              <div className="grid grid-cols-7 gap-1 flex-grow">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`text-center rounded-full w-8 h-8 mx-auto flex items-center justify-center my-2
                      ${day.currentMonth ? 'text-gray-700' : 'text-gray-400'}
                      ${isSelectedDay(day.date) ? 'bg-blue-600 text-white' : ''}
                    `}
                    onClick={() => setSelectedDate(day.date)}
                  >
                    {day.day}
                  </div>
                ))}
              </div>

              {/* Extra space at the bottom */}
              <div className="mt-auto py-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;