import React, { useEffect, useState } from "react";
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

export function AddRecvisitsDialog({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Barcha maydonlar uchun state
  const [form, setForm] = useState({
    title: { uz: "", ru: "", en: "", kk: "" },
    address: "",
    phone: "",
    account_number: "",
    bank: "",
    mfo: "",
    personal_account: "",
    stir: "",
    oknox: "",
  });

  const handleOpen = () => setOpen(!open);

  const fetchData = async () => {
    try {
      const response = await $api.get("/category");
      setData(response.data.data);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleTitleChange = (e, lang) => {
    setForm({ ...form, title: { ...form.title, [lang]: e.target.value } });
  };

  const handleAdd = async () => {
    if (!categoryId) {
      sweetAlert("Kategoriya tanlang!", "error");
      return;
    }

    setLoading(true);
    try {
      await $api.post("/requisites", { ...form, category_id: categoryId });
      onAdded();
      setForm({
        title: { uz: "", ru: "", en: "", kk: "" },
        address: "",
        phone: "",
        account_number: "",
        bank: "",
        mfo: "",
        personal_account: "",
        stir: "",
        oknox: "",
      });
      sweetAlert("Muvaffaqiyatli qo‘shildi", "success");
      handleOpen();
    } catch (error) {
      console.error("Xatolik:", error);
      sweetAlert("Xatolik yuz berdi!", "error");
    }
    setLoading(false);
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-green-500 text-white">
        Rekvizit qo‘shish
      </Button>

      <Dialog open={open} handler={handleOpen} size="lg" className="p-4">
        <DialogHeader className="relative">
          <Typography variant="h4" color="blue-gray">
            Yangi Rekvizit Qo‘shish
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
          {/* Kategoriya tanlash */}
          <div className="w-72">
            <Select
              onChange={(e) => setCategoryId(e)}
              label="Kategoriya tanlash"
            >
              {data?.length > 0 &&
                data.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option?.title["uz"]}
                  </Option>
                ))}
            </Select>
          </div>

          <div className=" grid grid-cols-2 gap-4">
            {/* Title (ko‘p tilli) */}
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Sarlavha ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input
                  value={form.title[lang]}
                  onChange={(e) => handleTitleChange(e, lang)}
                  placeholder={`Sarlavha (${lang == "kk" ? "CHI" : lang.toUpperCase()})`}
                  required
                />
              </div>
            ))}

            {/* Address */}
            <Input
              label="Manzil"
              value={form.address}
              onChange={(e) => handleInputChange(e, "address")}
              required
            />

            {/* Telefon */}
            <Input
              label="Telefon"
              value={form.phone}
              onChange={(e) => handleInputChange(e, "phone")}
              required
            />

            {/* Hisob raqami */}
            <Input
              label="Hisob raqami"
              value={form.account_number}
              onChange={(e) => handleInputChange(e, "account_number")}
              required
            />

            {/* Bank */}
            <Input
              label="Bank"
              value={form.bank}
              onChange={(e) => handleInputChange(e, "bank")}
              required
            />

            {/* MFO */}
            <Input
              label="MFO"
              value={form.mfo}
              onChange={(e) => handleInputChange(e, "mfo")}
              required
            />

            {/* Shaxsiy hisob */}
            <Input
              label="Shaxsiy hisob"
              value={form.personal_account}
              onChange={(e) => handleInputChange(e, "personal_account")}
              required
            />

            {/* STIR */}
            <Input
              label="STIR"
              value={form.stir}
              onChange={(e) => handleInputChange(e, "stir")}
              required
            />

            {/* OKNOX */}
            <Input
              label="OKNOX"
              value={form.oknox}
              onChange={(e) => handleInputChange(e, "oknox")}
              required
            />
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            onClick={handleAdd}
            loading={loading}
            className="bg-blue-500 text-white"
          >
            Saqlash
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
