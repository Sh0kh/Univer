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

export function CreateJob({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: { uz: "", ru: "", en: "", kk: "" },
    faculty: { uz: "", ru: "", en: "", kk: "" },
    description: { uz: "", ru: "", en: "", kk: "" },
    location: { uz: "", ru: "", en: "", kk: "" },
    employment_type: { uz: "", ru: "", en: "", kk: "" },
    url: ''
  });

  const handleOpen = () => setOpen(!open);

  const handletitleChange = (e, lang) => {
    setForm({
      ...form,
      title: { ...form.title, [lang]: e.target.value },
    });
  };

  const handleFacultyChange = (e, lang) => {
    setForm({
      ...form,
      faculty: { ...form.faculty, [lang]: e.target.value },
    });
  };
  const handlelocationChange = (e, lang) => {
    setForm({
      ...form,
      location: { ...form.location, [lang]: e.target.value },
    });
  };
  const handleEmployment_typeChange = (e, lang) => {
    setForm({
      ...form,
      employment_type: { ...form.employment_type, [lang]: e.target.value },
    });
  };
  const handleDescriptionChange = (e, lang) => {
    setForm({
      ...form,
      description: { ...form.description, [lang]: e.target.value },
    });
  };

  const handleAdd = async () => {

    setLoading(true);
    try {

      await $api.post("/job-vacancies", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onAdded();
      setForm({
        title: { uz: "", ru: "", en: "", kk: "" },
        faculty: { uz: "", ru: "", en: "", kk: "" },
        description: { uz: "", ru: "", en: "", kk: "" },
        location: { uz: "", ru: "", en: "", kk: "" },
        employment_type: { uz: "", ru: "", en: "", kk: "" },
        url: ''
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
        E'lon yaratish
      </Button>

      <Dialog open={open} handler={handleOpen} size="xl" className="p-4">
        <DialogHeader className="relative">
          <Typography variant="h4" color="blue-gray">
            E'lon yaratish
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
        <DialogBody className="space-y-4 pb-6 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Nomi ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input value={form.title[lang]} onChange={(e) => handletitleChange(e, lang)} required />
              </div>
            ))}
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Lavozim ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input value={form.faculty[lang]} onChange={(e) => handleFacultyChange(e, lang)} required />
              </div>
            ))}
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Batafsil malumot ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input value={form.description[lang]} onChange={(e) => handleDescriptionChange(e, lang)} required />
              </div>
            ))}
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Manzil ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input value={form.location[lang]} onChange={(e) => handlelocationChange(e, lang)} required />
              </div>
            ))}
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                  Ish turi ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input value={form.employment_type[lang]} onChange={(e) => handleEmployment_typeChange(e, lang)} required />
              </div>
            ))}
            <div>
              <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                Havola
              </Typography>
              <Input value={form.url}
                onChange={(e) => setForm((prev) => ({ ...prev, url: e.target.value }))}
                required />
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button onClick={handleAdd} disabled={loading} className="bg-blue-500 text-white">
            {loading ? "Saqlanmoqda..." : "Saqlash"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
