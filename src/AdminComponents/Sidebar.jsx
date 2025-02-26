import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaCity,
  FaCommentAlt,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { IoLogoReact } from "react-icons/io5";

const menuItems = [
  { name: "Asosiy", path: "/admin", icon: <FaHome className="text-lg" /> },
  {
    name: "Kategoriyalar",
    path: "/admin/categories",
    icon: <TbCategoryPlus className="text-lg" />,
  },
  {
    name: "Rekvisitlar",
    path: "/admin/recvizits",
    icon: <TbCategoryPlus className="text-lg" />,
  },
  {
    name: "Yangiliklar",
    subItems: [
      { name: "Barcha yangiliklar", path: "/admin/news" },
      { name: "Yangilik yaratish", path: "/admin/news/create" },
    ],
    path: "/admin/news",
    icon: <FaCity className="text-lg" />,
  },
  {
    name: "Murojaatlarni ko‘rib chiqish tartibi",
    path: "/admin/review",
    icon: <FaCommentAlt className="text-lg" />,
  },
  {
    name: "Xalqaro aloqalar",
    path: "/admin/international",
    icon: <FaCommentAlt className="text-lg" />,
  },
  {
    name: "Biz haqimizda",
    path: "/admin/aboutus",
    icon: <FaCommentAlt className="text-lg" />,
  },
  {
    name: "Management",
    path: "/admin/management",
    icon: <FaCommentAlt className="text-lg" />,
  },
  {
    name: "Hamkorlarimiz",
    path: "/admin/OurPartners",
    icon: <FaCommentAlt className="text-lg" />,
  },
  {
    name: "Ochik ma'lumotlar",
    subItems: [
      { name: "Ochiq Malumotlar", path: "/admin/open-data" },
      { name: "Karrupsiyaga qarshi", path: "/admin/against-corrution" },
      { name: "Regularly Document", path: "/admin/regulatory-doc" },
    ],
    path: "/admin/events",
    icon: <FaUsers className="text-lg" />,
  },
  {
    name: "Universitet statistikasi",
    subItems: [
      { name: "Barcha Kategoriyalar", path: "/admin/categories/all" },
      { name: "Kategoriya qo‘shish", path: "/admin/categories/add" },
    ],
    path: "/admin/university-stats",
    icon: <FaCommentAlt className="text-lg" />,
  },
  {
    name: "Virtual Xizmatlar",
    subItems: [
      { name: "Barcha Kategoriyalar", path: "/admin/categories/all" },
      { name: "Kategoriya qo‘shish", path: "/admin/categories/add" },
    ],
    path: "/admin/virtual-services",
    icon: <FaUsers className="text-lg" />,
  },

  {
    name: "Hamkorlarimiz",
    path: "/admin/partners",
    icon: <FaCity className="text-lg" />,
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
      className={`h-screen bg-lb text-white transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
        } p-4 shadow-lg flex flex-col justify-between fixed z-50`}
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
