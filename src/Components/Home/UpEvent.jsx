import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function UpEvent() {
  const [date, setDate] = useState(new Date());
  const events = [
    { date: "10", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" },
    { date: "11", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" },
    { date: "12", month: "YAN", time: "14:00 - 16:00", title: "Raximova Guzalbegim Murodovnaning tabiiy fanlari doktori (DSc) dissertatsiya ishi himoyasi", status: "Kutilmoqda" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="Container">
      <div className="flex justify-between items-center pb-2 mb-4 border-b-2 border-gray-200 relative">
        <h2 className="text-xl font-semibold text-[#1f235b]">• Kutilayotgan tadbirlar</h2>
        <a href="#" className="text-[#1f235b] font-medium">Ko‘proq ko‘rish</a>
        <div className="absolute bottom-[-2px] left-0 w-20 h-[2px] bg-[#1f235b]"></div>
      </div>
      <div className="calendar_wr flex items-center justify-between gap-[30px]">
        <div className="div123"> {events.map((event, index) => (
          <div key={index} className="flex items-center border max-w-[954px] rounded-lg p-4 mb-3 shadow-sm">
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
        ))}</div>
       
        <div className="calendar">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
      </div>
    </div>
  );
}