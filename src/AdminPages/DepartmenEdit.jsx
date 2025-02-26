import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
    Button,
    Select,
    Option,

} from "@material-tailwind/react";
import UzAboutUsCreate from "../AdminComponents/text-editor/uz";
import EnAboutUsCreate from "../AdminComponents/text-editor/en";
import KKAboutUsCreate from "../AdminComponents/text-editor/kk";
import RuAboutUsCreate from "../AdminComponents/text-editor/ru";
import { $api } from "../utils";
import { sweetAlert } from "../utils/sweetalert";
import Loader from "../lib/loader";


export default function DepartmenEdit() {
    const [uzinfo, setUzInfo] = useState({ title: "", description: "" });
    const [ruinfo, setRuInfo] = useState({ title: "", description: "" });
    const [Eninfo, setEnInfo] = useState({ title: "", description: "" });
    const [KKinfo, setKKInfo] = useState({ title: "", description: "" });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [activeTab, setActiveTab] = useState("uz");
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(true)
    const [status, setStatus] = useState('')
    const { ID } = useParams()

    const FechCategory = async () => {
        try {
            const response = await $api.get("/management");
            setData(response.data.data);
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    };


    const FechDataId = async () => {
        try {
            const response = await $api.get(`/department-centers/${ID}`)
            setUzInfo({ title: response?.data?.data?.title?.uz, description: response?.data?.data?.text?.uz })
            setRuInfo({ title: response?.data?.data?.title?.ru, description: response?.data?.data?.text?.ru })
            setEnInfo({ title: response?.data?.data?.title?.en, description: response?.data?.data?.text?.en })
            setKKInfo({ title: response?.data?.data?.title?.kk, description: response?.data?.data?.text?.kk })
            setSelectedCategory(response?.data?.data?.managment?.id)
            setStatus(response?.data?.data?.status)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading2(false)
        }
    }

    useEffect(() => {
        FechDataId()
        FechCategory();
    }, []);

    const Handledit = async () => {
        setLoading(true)
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
            categomanagment_idry_id: selectedCategory,
            status: status
        };

        try {
            await $api.put("/department-centers", payload);
            sweetAlert("Muvaffaqiyatli qo'shildi", "success");
        } catch (error) {
            sweetAlert(`Xatolik: ${error.message}`, "error");
        } finally {
            setLoading(false)
        }
    };



    if (loading2) {
        return <Loader />;
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{status === 'sections' ? "Bolim" : 'Markaz'} yangilash</h2>
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
                    <NavLink className={`block`} to={`/admin/${status}`}>
                        <Button className="bg-green-500 text-white">
                            Malumot ko'rish
                        </Button>
                    </NavLink>
                </div>
            </div>
            <div className="bg-[white] p-[20px] rounded-[10px] mt-[20px]">
                <Select
                    value={selectedCategory}
                    label="Kategoriya tanlang" onChange={(value) => setSelectedCategory(value)}>
                    {data.map((item) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
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
                    onClick={Handledit}
                    className="bg-green-500 text-white flex items-center justify-center mt-[10px] w-full">
                    Saqlash
                </Button>
            </div>
        </div>
    )
}