import React, { useState } from "react";
import {
  Dialog,
  Button,
  Typography,
  IconButton,
  Input,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { $api } from "../../utils";
import { sweetAlert } from "../../utils/sweetalert";

export function AddRegularlyDoc({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: { uz: "", ru: "", en: "", kk: "" },
    url: "",
  });

  const handleOpen = () => setOpen(!open);

  const handleTitleChange = (e, lang) => {
    setForm((prev) => ({
      ...prev,
      name: { ...prev.name, [lang]: e.target.value },
    }));
  };

  const handleUrlChange = (e) => {
    setForm((prev) => ({ ...prev, url: e.target.value }));
  };

  const validateForm = () => {
    let newErrors = {};
    
    // Har bir til bo'yicha sarlavhani tekshirish
    Object.keys(form.name).forEach((lang) => {
      if (!form.name[lang].trim()) {
        newErrors[lang] = `Sarlavha (${lang.toUpperCase()}) talab qilinadi`;
      }
    });
    
    // URL ni tekshirish
    if (!form.url.trim()) {
      newErrors.url = "URL talab qilinadi";
    } else if (!/^https?:\/\/.+/.test(form.url)) {
      newErrors.url = "Yaroqli URL kiriting";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await $api.post("/regulatory-documents", form);
      onAdded();
      sweetAlert("Muvaffaqiyatli qo‘shildi", "success");
      handleOpen();
      setForm({ name: { uz: "", ru: "", en: "", kk: "" }, url: "" }); // Formni tozalash
      setErrors({});
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
          {/* Title (ko‘p tilli) */}
          <div className="grid grid-cols-2 gap-4">
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Sarlavha ({lang === "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input
                  value={form.name[lang]}
                  onChange={(e) => handleTitleChange(e, lang)}
                  placeholder={`Sarlavha (${lang === "kk" ? "CHI" : lang.toUpperCase()})`}
                  required
                  error={errors[lang] ? true : false}
                />
                {errors[lang] && <p className="text-red-500 text-xs">{errors[lang]}</p>}
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
              error={errors.url ? true : false}
            />
            {errors.url && <p className="text-red-500 text-xs">{errors.url}</p>}
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
