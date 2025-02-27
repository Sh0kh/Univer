import React, { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import {
  FaBuilding,
  FaHandshake,
  FaHome,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import {
  TbCategory,
  TbNews,
  TbClipboardList,
  TbWorld,
} from "react-icons/tb";
import {
  MdRequestPage,
  MdBusiness,
} from "react-icons/md";
import { AiOutlineInteraction, AiOutlineFileText } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GrSchedule } from "react-icons/gr";

const menuItems = [
  { name: "Asosiy", path: "/admin", icon: <FaHome className="text-lg" /> },
  {
    name: "Kategoriyalar",
    path: "/admin/categories",
    icon: <TbCategory className="text-lg" />,
  },
  {
    name: "Rekvisitlar",
    path: "/admin/recvizits",
    icon: <TbClipboardList className="text-lg" />,
  },
  {
    name: "Yangiliklar",
    subItems: [
      { name: "Barcha yangiliklar", path: "/admin/news" },
      { name: "Yangilik yaratish", path: "/admin/news/create" },
    ],
    path: "/admin/news",
    icon: <TbNews className="text-lg" />,
  },
  {
    name: "Murojaatlarni ko‘rib chiqish tartibi",
    path: "/admin/review",
    icon: <MdRequestPage className="text-lg" />,
  },
  {
    name: "Xalqaro aloqalar",
    path: "/admin/international",
    icon: <TbWorld className="text-lg" />,
  },
  {
    name: "Biz haqimizda",
    path: "/admin/aboutus",
    icon: <FaBuilding className="text-lg" />,
  },
  {
    name: "Management",
    path: "/admin/management",
    icon: <RiTeamFill className="text-lg" />,
  },
  {
    name: "Hamkorlarimiz",
    path: "/admin/OurPartners",
    icon: <FaHandshake className="text-lg" />,
  },
  {
    name: "Interakriv Hizmatlar",
    path: "/admin/Interactives/Services",
    icon: <AiOutlineInteraction className="text-lg" />,
  },
  {
    name: "Marosimlar Jadvali",
    path: "/admin/schedule-event",
    icon: <GrSchedule className="text-lg" />,
  },
  {
    name: "Ochik ma'lumotlar",
    subItems: [
      { name: "Ochiq Malumotlar", path: "/admin/open-data" },
      { name: "Karrupsiyaga qarshi", path: "/admin/against-corrution" },
      { name: "Regularly Document", path: "/admin/regulatory-doc" },
    ],
    path: "/admin/events",
    icon: <AiOutlineFileText className="text-lg" />,
  },
  // {
  //   name: "Universitet statistikasi",
  //   subItems: [
  //     { name: "Barcha Kategoriyalar", path: "/admin/categories/all" },
  //     { name: "Kategoriya qo‘shish", path: "/admin/categories/add" },
  //   ],
  //   path: "/admin/university-stats",
  //   icon: <FaUniversity className="text-lg" />,
  // },
  // {
  //   name: "Virtual Xizmatlar",
  //   subItems: [
  //     { name: "Barcha Kategoriyalar", path: "/admin/categories/all" },
  //     { name: "Kategoriya qo‘shish", path: "/admin/categories/add" },
  //   ],
  //   path: "/admin/virtual-services",
  //   icon: <TbServer className="text-lg" />,
  // },
  {
    name: "Bosh ish orinlari",
    path: "/admin/vacancies",
    icon: <RiTeamFill className="text-lg" />,
  },
  // {
  //   name: "Hamkorlarimiz",
  //   path: "/admin/OurPartners",
  //   icon: <MdBusiness className="text-lg" />,
  // },
  {
    name: "Bolimlar",
    path: "/admin/sections",
    icon: <MdBusiness className="text-lg" />,
  },
  {
    name: "Statistika",
    path: "/admin/statistics",
    icon: <FaChartPie className="text-lg" />,
  },
  {
    name: "Virtual Murojatlar",
    path: "/admin/message-user",
    icon: <TiMessages className="text-lg" />,
  },
  {
    name: "Markazlar",
    path: "/admin/centers",
    icon: <MdBusiness className="text-lg" />,
  },
];

export default function Sidebar({ isCollapsed, setIsCollapsed, handleLogOut }) {
  const location = useLocation();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };


  return (
    <div
      className={`h-screen bg-lb text-white transition-all duration-300 overflow-y-auto ${isCollapsed ? "w-20" : "w-64"
        } p-4 shadow-lg flex flex-col justify-between fixed z-50 `}
    >
      <div>
        <h2
          className={`text-xl font-semibold text-center mb-8 ${isCollapsed ? "hidden" : ""
            }`}
        >
          IT LIVE
        </h2>
        <div
          className={`text-xl font-semibold text-center flex items-center justify-center mb-8 ${isCollapsed ? "" : "hidden"
            }`}
        >
          <IoLogoReact className="animate-spin" />
        </div>
        <ul className="space-y-2">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <li key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-2 hover:bg-blue-700 rounded-md"
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    {!isCollapsed && (
                      <span className="text-sm">{item.name}</span>
                    )}
                  </div>
                  {!isCollapsed && (
                    <FaChevronDown
                      className={`text-sm transition-transform ${openAccordion === index ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>
                {openAccordion === index && (
                  <ul className="pl-6 mt-2 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`flex items-center gap-2 p-2 text-sm rounded-md hover:bg-blue-700 ${location.pathname === subItem.path
                          ? "!bg-blue-600"
                          : ""
                          }`}
                      >
                        <FaChevronRight />
                        {subItem.name}
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-4 p-2 rounded-md hover:bg-blue-700 ${location.pathname === item.path ? "bg-blue-600" : ""
                  }`}
              >
                {item.icon}
                {!isCollapsed && <span className="text-sm">{item.name}</span>}
              </Link>
            )
          )}
          <li
            onClick={handleLogOut}
            className="flex items-center hover:bg-blue-700 gap-4 p-2 cursor-pointer rounded-md"
          >
            <RiLogoutBoxLine className="text-xl" />
            {!isCollapsed && <span className="text-sm">Chiqish</span>}
          </li>
        </ul>
      </div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-center p-2 mt-6 bg-blue-500 hover:bg-blue-700 rounded-md focus:outline-none"
      >
        {isCollapsed ? (
          <MdChevronRight className="text-2xl" />
        ) : (
          <MdChevronLeft className="text-2xl" />
        )}
      </button>
    </div>
  );
}
