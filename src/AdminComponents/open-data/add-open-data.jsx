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

export function AddOpenData({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: { uz: "", ru: "", en: "", kk: "" },
    url: "",
    category_id: "",
  });

  const handleOpen = () => setOpen(!open);

  // Kategoriyalarni olish
  const fetchCategories = async () => {
    try {
      const response = await $api.get("/category");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Title o'zgarishini boshqarish
  const handleTitleChange = (e, lang) => {
    setForm((prev) => ({
      ...prev,
      name: { ...prev.name, [lang]: e.target.value },
    }));
  };

  // URL o'zgarishini boshqarish
  const handleUrlChange = (e) => {
    setForm((prev) => ({ ...prev, url: e.target.value }));
  };

  // Kategoriya tanlash
  const handleCategoryChange = (value) => {
    setForm((prev) => ({ ...prev, category_id: value }));
  };

  const handleAdd = async () => {
    if (!form.category_id) {
      sweetAlert("Kategoriya tanlang!", "error");
      return;
    }
    if (!form.url) {
      sweetAlert("URL kiritish majburiy!", "error");
      return;
    }

    setLoading(true);
    try {
      await $api.post("/open-data", form);
      onAdded();
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
        Malumot qo‘shish
      </Button>

      <Dialog open={open} handler={handleOpen} size="lg" className="p-4">
        <DialogHeader className="relative">
          <Typography variant="h4" color="blue-gray">
            Malumot Qo‘shish
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
              value={form.category_id}
              onChange={(value) => handleCategoryChange(value)}
              label="Kategoriya tanlash"
            >
              {categories?.length > 0 &&
                categories.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option?.title["uz"]}
                  </Option>
                ))}
            </Select>
          </div>

          {/* Title (ko‘p tilli) */}
          <div className="grid grid-cols-2 gap-4">
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Sarlavha ({lang.toUpperCase()})
                </Typography>
                <Input
                  value={form.name[lang]}
                  onChange={(e) => handleTitleChange(e, lang)}
                  placeholder={`Sarlavha (${lang.toUpperCase()})`}
                  required
                />
              </div>
            ))}
          </div>

          {/* URL qo'shish */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              URL
            </Typography>
            <Input
              value={form.url}
              onChange={handleUrlChange}
              placeholder="https://example.com"
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
