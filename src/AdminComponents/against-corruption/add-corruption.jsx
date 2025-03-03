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

export function AddCorruption({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: { uz: "", ru: "", en: "", kk: "" },
    url: "",
  });

  const [errors, setErrors] = useState({
    name: { uz: "", ru: "", en: "", kk: "" },
    url: "",
  });

  const handleOpen = () => setOpen(!open);

  // Title o'zgarishini boshqarish
  const handleTitleChange = (e, lang) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      name: { ...prev.name, [lang]: value },
    }));

    // Validatsiya
    setErrors((prev) => ({
      ...prev,
      name: {
        ...prev.name,
        [lang]: value.length < 3 ? "Kamida 3 ta belgi bo‘lishi kerak" : "",
      },
    }));
  };

  // URL o'zgarishini boshqarish
  const handleUrlChange = (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, url: value }));

    // URL validatsiya
    const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    setErrors((prev) => ({
      ...prev,
      url: !urlRegex.test(value) ? "To‘g‘ri URL kiriting" : "",
    }));
  };

  const handleAdd = async () => {
    // Validatsiya
    let hasError = false;
    const newErrors = { name: {}, url: "" };

    // Sarlavha validatsiyasi
    Object.keys(form.name).forEach((lang) => {
      if (form.name[lang].length < 3) {
        newErrors.name[lang] = "Kamida 3 ta belgi bo‘lishi kerak";
        hasError = true;
      }
    });

    // URL validatsiyasi
    const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    if (!form.url || !urlRegex.test(form.url)) {
      newErrors.url = "To‘g‘ri URL kiriting";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await $api.post("/fighting-corruption", form);
      onAdded();
      sweetAlert("Muvaffaqiyatli qo‘shildi", "success");
      handleOpen();

      // Formani tozalash
      setForm({ name: { uz: "", ru: "", en: "", kk: "" }, url: "" });
      setErrors({ name: { uz: "", ru: "", en: "", kk: "" }, url: "" });
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
                  Sarlavha ({lang.toUpperCase()})
                </Typography>
                <Input
                  value={form.name[lang]}
                  onChange={(e) => handleTitleChange(e, lang)}
                  placeholder={`Sarlavha (${lang.toUpperCase()})`}
                  required
                />
                {errors.name[lang] && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.name[lang]}
                  </Typography>
                )}
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
            {errors.url && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.url}
              </Typography>
            )}
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
