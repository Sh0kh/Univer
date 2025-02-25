import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Button,
    Select,
    Option,
    Input,
    Checkbox
} from "@material-tailwind/react";
import UzAboutUsCreate from "../AdminComponents/aboutUS/aboutUs-create/uz-aboutUs-create";
import EnAboutUsCreate from "../AdminComponents/aboutUS/aboutUs-create/en-aboutUs-create";
import KKAboutUsCreate from "../AdminComponents/aboutUS/aboutUs-create/kk-aboutUS-create";
import { $api } from "../utils";
import { sweetAlert } from "../utils/sweetalert";
import RuAboutUsCreate from "../AdminComponents/aboutUS/aboutUs-create/ru-aboutUs-create";

export default function AboutUsCreate() {
    const [uzinfo, setUzInfo] = useState({ title: "", description: "" });
    const [ruinfo, setRuInfo] = useState({ title: "", description: "" });
    const [Eninfo, setEnInfo] = useState({ title: "", description: "" });
    const [KKinfo, setKKInfo] = useState({ title: "", description: "" });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [activeTab, setActiveTab] = useState("uz");
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const FechCategory = async () => {
        try {
            const response = await $api.get("/category");
            setData(response.data.data);
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    };
    useEffect(() => {
        FechCategory();
    }, []);

    const CreateAboutUs = async () => {
        const payload = {
            title: {
                uz: uzinfo.title,
                ru: ruinfo.title,
                en: Eninfo.title,
                kk: KKinfo.title
            },
            text: {
                uz: uzinfo.description,
                ru: ruinfo.description,
                en: Eninfo.description,
                kk: KKinfo.description
            },
            category_id: selectedCategory
        };

        try {
            await $api.post("/about-me", payload);
            sweetAlert("Muvaffaqiyatli qo'shildi", "success");
            setUzInfo({ title: "", description: "" });
            setRuInfo({ title: "", description: "" });
            setEnInfo({ title: "", description: "" });
            setKKInfo({ title: "", description: "" });
            setSelectedCategory(null);
        } catch (error) {
            sweetAlert(`Xatolik: ${error.message}`, "error");
        } finally {
            setLoading(false)
        }
    };


    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Biz haqimizda</h2>
            <div className=" flex  justify-between items-center ">
                <div className="mb-4 flex space-x-2">
                    {["uz", "ru", "en", "kk"].map((lang) => (
                        <button
                            key={lang}
                            className={`px-4 py-2 rounded ${activeTab === lang ? "bg-blue-500 text-white" : "bg-gray-300"
                                }`}
                            onClick={() => setActiveTab(lang)}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div>
                    <NavLink className={`block`} to={'/admin/aboutUs'}>
                        <Button className="bg-green-500 text-white">
                            Malumot ko'rish
                        </Button>
                    </NavLink>
                </div>
            </div>
            <div className="bg-[white] p-[20px] rounded-[10px] mt-[20px]">
                <Select label="Kategoriya tanlang" onChange={(value) => setSelectedCategory(value)}>
                    {data.map((item) => (
                        <Option key={item.id} value={item.id}>
                            {item.title[activeTab]}
                        </Option>
                    ))}
                </Select>
                <div className="mt-5">
                    {activeTab === "uz" ? (
                        <UzAboutUsCreate value={uzinfo} onChange={setUzInfo} />
                    ) : activeTab === "ru" ? (
                        <RuAboutUsCreate value={ruinfo} onChange={setRuInfo} />
                    ) : activeTab === "en" ? (
                        <EnAboutUsCreate value={Eninfo} onChange={setEnInfo} />
                    ) : activeTab === "kk" ? (
                        <KKAboutUsCreate value={KKinfo} onChange={setKKInfo} />
                    ) : null}
                </div>
                <Button
                    disabled={loading}
                    loading={loading}
                    onClick={CreateAboutUs}
                    className="bg-green-500 text-white text-center mt-[10px] w-full">
                    Yaratish
                </Button>
            </div>
        </div>
    )
}