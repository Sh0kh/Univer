import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Button,
    Select,
    Option,
    Input,
    Checkbox
} from "@material-tailwind/react";
import UzNewsCreate from "../AdminComponents/news/news-create/uz-news-create";
import RuNewsCreate from "../AdminComponents/news/news-create/ru-news-create";
import EnNewsCreate from "../AdminComponents/news/news-create/en-news-create";
import KKNewsCreate from "../AdminComponents/news/news-create/kk-news-create";
import { $api } from "../utils";
import { sweetAlert } from "../utils/sweetalert";

export default function NewsCreate() {
    const [activeTab, setActiveTab] = useState("uz");
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [OneCategory, setOneCategory] = useState([]);
    const [date, setDate] = useState("");
    const [showInCarousel, setShowInCarousel] = useState(false);
    const [loading, setLoading] = useState(false)

    const [uzinfo, setUzInfo] = useState({ title: "", description: "" });
    const [ruinfo, setRuInfo] = useState({ title: "", description: "" });
    const [Eninfo, setEnInfo] = useState({ title: "", description: "" });
    const [KKinfo, setKKInfo] = useState({ title: "", description: "" });

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const CreateNews = async () => {
        setLoading(true)
        try {
            const formData = new FormData();

            formData.append("title[uz]", uzinfo.title);
            formData.append("title[ru]", ruinfo.title);
            formData.append("title[en]", Eninfo.title);
            formData.append("title[kk]", KKinfo.title);

            formData.append("description[uz]", uzinfo.description);
            formData.append("description[ru]", ruinfo.description);
            formData.append("description[en]", Eninfo.description);
            formData.append("description[kk]", KKinfo.description);

            formData.append("category_detal_id", selectedSubCategory);
            formData.append("show_in_carousel", showInCarousel);
            formData.append("date", date);

            if (selectedFile) {
                formData.append("photo", selectedFile);
            } else {
                console.warn("Файл не выбран!");
            }

            await $api.post(`/news`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            sweetAlert("Muvaffaqiyatli qo'shildi", "success");

            // Очистка состояний
            setUzInfo({ title: "", description: "" });
            setRuInfo({ title: "", description: "" });
            setEnInfo({ title: "", description: "" });
            setKKInfo({ title: "", description: "" });
            setSelectedSubCategory("");
            setShowInCarousel(false);
            setDate("");
            setSelectedFile(null);
        } catch (error) {
            sweetAlert(`Xatolik: ${error.message}`, "error");
            console.error("Ошибка при загрузке:", error);
        } finally {
            setLoading(false)
        }
    };


    const FechCategory = async () => {
        try {
            const response = await $api.get("/category");
            setData(response.data.data);
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    };

    const FechCategoryOne = async () => {
        try {
            const response = await $api.get(`/category/${selectedCategory}`);
            setOneCategory(response.data.data?.details);
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    };

    useEffect(() => {
        FechCategory();
        FechCategoryOne();
    }, [selectedCategory]);


    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Yangilik yaratish</h2>
            <div className="flex justify-between items-center ">
                <div className="mb-4 flex space-x-2">
                    {["uz", "ru", "en", "kk"].map((lang) => (
                        <button
                            key={lang}
                            className={`px-4 py-2 rounded ${activeTab === lang ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                            onClick={() => setActiveTab(lang)}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div>
                    <NavLink className="block" to={"/admin/news"}>
                        <Button className="bg-green-500 text-white">
                            Barcha yangiliklar
                        </Button>
                    </NavLink>
                </div>
            </div>

            <div className="bg-[white] p-[10px] rounded-[10px]">
                <div className="mt-4 flex items-center gap-[10px]">
                    <Select label="Kategoriya tanlang" onChange={(value) => setSelectedCategory(value)}>
                        {data.map((item) => (
                            <Option key={item.id} value={item.id}>
                                {item.title[activeTab]}
                            </Option>
                        ))}
                    </Select>
                    <Select label="Kategoriya tanlang" onChange={(value) => setSelectedSubCategory(value)}>
                        {OneCategory?.map((item) => (
                            <Option key={item.id} value={item.id}>
                                {item.title[activeTab]}
                            </Option>
                        ))}
                    </Select>
                </div>

                <div className="mt-5">
                    {activeTab === "uz" ? (
                        <UzNewsCreate value={uzinfo} onChange={setUzInfo} />
                    ) : activeTab === "ru" ? (
                        <RuNewsCreate value={ruinfo} onChange={setRuInfo} />
                    ) : activeTab === "en" ? (
                        <EnNewsCreate value={Eninfo} onChange={setEnInfo} />
                    ) : activeTab === "kk" ? (
                        <KKNewsCreate value={KKinfo} onChange={setKKInfo} />
                    ) : null}
                </div>

                {/* Дата и чекбокс */}
                <div className="mt-4 flex items-center gap-4">
                    <Input
                        type="date"
                        label="Sana tanlang"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <div className="w-[300px]">
                        <Checkbox
                            label="Karuselga qo'shish"
                            checked={showInCarousel}
                            onChange={(e) => setShowInCarousel(e.target.checked)}
                        />
                    </div>
                </div>

                {/* Загрузка изображения */}
                <div className="mt-4">
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                            {selectedFile ? selectedFile.name : "Rasm yuklash"}
                        </div>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                <Button
                    loading={loading}
                    onClick={CreateNews} className="bg-green-500 text-white text-center mt-[10px] w-full">
                    {loading ? "Yaratilmoqda..." : 'Yaratish'}
                </Button>
            </div>

        </div>
    );
}
