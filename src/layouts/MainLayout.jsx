import { Outlet } from "react-router-dom";
import { createContext, } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export const DataContext = createContext(); // Создаем контекст

export default function MainLayout() {
   

    return (
        <DataContext.Provider>
            <Header />
            <div className="pt-[225px]">
                <Outlet /> {/* Данные будут доступны в дочерних компонентах */}
            </div>
            <Footer />
        </DataContext.Provider>
    );
}
