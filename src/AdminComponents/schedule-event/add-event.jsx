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
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { $api } from "../../utils";
import { sweetAlert } from "../../utils/sweetalert";

export function AddScheduledEvent({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: { uz: "", ru: "", en: "", kk: "" },
    date: "",
    start_time: "",
    end_time: "",
    status: { uz: "Kutulmoqda", ru: "Kutulmoqda", en: "Kutulmoqda", kk: "Kutulmoqda" },
  });

  const handleOpen = () => setOpen(!open);

  // Title o'zgarishini boshqarish
  const handleTitleChange = (e, lang) => {
    setForm((prev) => ({
      ...prev,
      title: { ...prev.title, [lang]: e.target.value },
    }));
  };

  // Date, start_time, end_time o'zgarishini boshqarish
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "date") {
      const [year, month, day] = value.split("-"); // `2025-02-10` → `["2025", "02", "10"]`
      const formattedDate = `${day}.${month}.${year}`; // `10.02.2025`
      setForm((prev) => ({ ...prev, [name]: formattedDate }));
    } else if (name === "start_time" || name === "end_time") {
      const [hours, minutes] = value.split(":"); // `14:30:00` → `["14", "30", "00"]`
      const formattedTime = `${hours}:${minutes}`; // `14:30`
      setForm((prev) => ({ ...prev, [name]: formattedTime }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  

  // Statusni o'zgartirish
  const handleStatusChange = (value) => {
    setForm((prev) => ({
      ...prev,
      status: { uz: value, ru: value, en: value, kk: value },
    }));
  };

  const handleAdd = async () => {
    if (!form.date || !form.start_time || !form.end_time) {
      sweetAlert("Sanani va vaqtni to‘liq kiriting!", "error");
      return;
    }

    setLoading(true);
    try {
      await $api.post("/scheduled-event", form);
      onAdded();
      sweetAlert("Muvaffaqiyatli qo‘shildi", "success");
      handleOpen();

      // clear form
      setForm({
        title: { uz: "", ru: "", en: "", kk: "" },
        date: "",
        start_time: "",
        end_time: "",
        status: { uz: "Kutulmoqda", ru: "Kutulmoqda", en: "Kutulmoqda", kk: "Kutulmoqda" },
      });
    } catch (error) {
      console.error("Xatolik:", error);
      sweetAlert("Xatolik yuz berdi!", "error");
    }
    setLoading(false);
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-green-500 text-white">
        Yangi Tadbir Qo‘shish
      </Button>

      <Dialog open={open} handler={handleOpen} size="lg" className="p-4">
        <DialogHeader className="relative">
          <Typography variant="h4" color="blue-gray">
            Yangi Tadbir Qo‘shish
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
                  value={form.title[lang]}
                  onChange={(e) => handleTitleChange(e, lang)}
                  placeholder={`Sarlavha (${lang.toUpperCase()})`}
                  required
                />
              </div>
            ))}
          </div>

          {/* Date tanlash */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Sana
            </Typography>
            <Input type="date" name="date" value={form.date} onChange={handleChange} required />
          </div>

          {/* Start va End Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                Boshlanish vaqti
              </Typography>
              <Input type="time" name="start_time" value={form.start_time} onChange={handleChange} required />
            </div>
            <div>
              <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                Tugash vaqti
              </Typography>
              <Input type="time" name="end_time" value={form.end_time} onChange={handleChange} required />
            </div>
          </div>

          {/* Status tanlash */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Status
            </Typography>
            <Select value={form.status.uz} onChange={handleStatusChange} label="Status tanlang">
              <Option value="Kutulmoqda">Kutulmoqda</Option>
              <Option value="Tasdiqlangan">Tasdiqlangan</Option>
              <Option value="Bekor qilingan">Bekor qilingan</Option>
            </Select>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button onClick={handleAdd} loading={loading} className="bg-blue-500 text-white">
            Saqlash
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
