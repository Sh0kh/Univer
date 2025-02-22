import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  FaHome,
  FaUsers,
  FaCity,
  FaCommentAlt,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";

const menuItems = [
  { name: "Asosiy", path: "/admin", icon: <FaHome className="text-lg" /> },
  {
    name: "Kategoriyalar",
    subItems: [
      { name: "Barcha Kategoriyalar", path: "/admin/categories/all" },
      { name: "Kategoriya qo‘shish", path: "/admin/categories/add" },
    ],
    icon: <TbCategoryPlus className="text-lg" />,
  },
  { name: "Yangiliklar", path: "/admin/news", icon: <FaCity className="text-lg" /> },
  {
    name: "Marosimlar",
    path: "/admin/events",
    icon: <FaUsers className="text-lg" />,
  },
  {
    name: "Universitet statistikasi",
    path: "/admin/university-stats",
    icon: <FaCommentAlt className="text-lg" />,
  },
];

export default function Sidebar({ isCollapsed, setIsCollapsed, handleLogOut }) {
  const location = useLocation();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className={`h-screen bg-lb text-white transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"} p-4 shadow-lg flex flex-col justify-between fixed z-50`}>
      <div>
        <h2 className={`text-xl font-semibold text-center mb-8 ${isCollapsed ? "hidden" : "block"}`}>IT LIVE</h2>
        <div className={`text-xl font-semibold text-center flex items-center justify-center mb-8 ${isCollapsed ? "block" : "hidden"}`}>
          <IoLogoReact className="animate-spin" />
        </div>
        <List className="space-y-2">
          {menuItems.map((item, index) => (
            item.subItems ? (
              <Accordion key={index} open={openAccordion === index} icon={
                <FaChevronDown className={`text-sm transition-transform text-white ${openAccordion === index ? "rotate-180" : ""}`} />
              }>
                <ListItem className="p-0" selected={openAccordion === index}>
                  <AccordionHeader onClick={() => toggleAccordion(index)} className="border-b-0 p-3 flex items-center gap-4 cursor-pointer">
                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                    {!isCollapsed && <span className="text-sm">{item.name}</span>}
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.path} className={`flex items-center gap-4 p-2 pl-8 hover:bg-blue-900 cursor-pointer ${location.pathname === subItem.path ? "bg-blue-700" : ""}`}>
                        <FaChevronRight className="text-xs" />
                        {!isCollapsed && <span className="text-sm">{subItem.name}</span>}
                      </Link>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            ) : (
              <Link key={index} to={item.path} className={`flex items-center gap-4 p-2 hover:bg-blue-900 cursor-pointer ${location.pathname === item.path ? "bg-blue-700" : ""}`}>
                {item.icon}
                {!isCollapsed && <span className="text-sm">{item.name}</span>}
              </Link>
            )
          ))}
          <li onClick={handleLogOut} className="flex items-center hover:bg-blue-900 gap-4 p-2 cursor-pointer">
            <RiLogoutBoxLine className="text-xl" />
            {!isCollapsed && <span className="text-sm">Chiqish</span>}
          </li>
        </List>
      </div>
    </div>
  );
}
