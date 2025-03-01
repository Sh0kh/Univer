import React, { useState, useEffect } from "react";
import {
    Dialog,
    Button,
    Typography,
    IconButton,
    Input,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select,
    Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { $api } from "../../utils";
import { sweetAlert } from "../../utils/sweetalert";
import { FaPencilAlt } from "react-icons/fa";

export function EditInteractivesServices({ onUpdated, rowData }) {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: { uz: "", ru: "", en: "", kk: "" },
        category_id: "",
    });

    useEffect(() => {
        if (rowData) {
            setForm({
                title: rowData.title || "",
                category_id: rowData?.category?.category_id || "",
            });
        }
    }, [rowData]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await $api.get("/category");
                setCategories(response.data.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleOpen = () => setOpen(!open);

    const handleInputChange = (e, field) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handlePositionChange = (e, lang) => {
        setForm({
            ...form,
            title: { ...form.title, [lang]: e.target.value },
        });
    };

    const handleUpdate = async () => {
        setLoading(true);
        try {
            await $api.put(`/interactives-services/${rowData.id}`, form);
            onUpdated();
            sweetAlert("Muvaffaqiyatli yangilandi", "success");
            handleOpen();
        } catch (error) {
            console.error("Xatolik:", error);
            sweetAlert("Xatolik yuz berdi!", "error");
        }
        setLoading(false);
    };

    return (
        <>
            <IconButton onClick={handleOpen} variant="text">
                <FaPencilAlt className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} handler={handleOpen} size="lg" className="p-4">
                <DialogHeader className="relative">
                    <Typography variant="h4" color="blue-gray">
                        Xizmatlar Yangilash
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="h-4 w-4 stroke-2" />
                    </IconButton>
                </DialogHeader>

                <DialogBody className="space-y-4 pb-6">
                    <div className="flex items-center flex-col gap-[10px]">
                        {["uz", "ru", "en", "kk"].map((lang) => (
                            <div key={lang} className="w-full">
                                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                                    Nomi ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                                </Typography>
                                <Input value={form.title[lang]} onChange={(e) => handlePositionChange(e, lang)} required />
                            </div>
                        ))}
                        <div className="w-full">
                            <Select value={form.category_id} onChange={(value) => setForm({ ...form, category_id: value })} label="Kategoriya tanlash">
                                {categories?.length > 0 &&
                                    categories.map((option) => (
                                        <Option key={option.id} value={option.id}>
                                            {option?.title["uz"]}
                                        </Option>
                                    ))}
                            </Select>
                        </div>
                    </div>
                </DialogBody>

                <DialogFooter>
                    <Button onClick={handleUpdate} disabled={loading} className="bg-blue-500 text-white">
                        {loading ? "Saqlanmoqda..." : "Saqlash"}
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
