import { Outlet } from "react-router-dom";
import Sidebar from "../AdminComponents/Sidebar";
import { useState } from "react";
import { ComplexNavbar } from "../AdminComponents/Navbar";

export default function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex h-screen overflow-hidden bg-gray-200">
      {/* Sidebar */}
      <div
        className={`transition-width duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          handleLogOut={handleLogOut}
        />
      </div>

      {/* Main content area */}
      <div
        className={`${
          isCollapsed ? "w-[calc(100% - 80px)]" : "w-[calc(100%-316px)]"
        } flex flex-1 flex-col`}
      >
        {/* Navbar */}
        <ComplexNavbar />

        {/* Scrollable Content */}
        <div className={` flex-1 overflow-y-auto p-4`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
