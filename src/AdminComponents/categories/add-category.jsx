import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { $api } from "../../utils";

export function AddCategory({ onCategoryAdded }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState({ uz: "", ru: "", en: "", kk: "" });
  const [loading, setLoading] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => {
    setOpen(false);
    setCategory({ uz: "", ru: "", en: "", kk: "" });
  };

  const handleAddCategory = async () => {
    setLoading(true);
    try {
      await $api.post("/category", { title: category });
      onCategoryAdded();
      closeDrawer();
      setLoading(false);
    } catch (error) {
      console.error("Kategoriya qo'shishda xatolik:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={openDrawer} className="bg-green-500 text-white">Kategoriya qo'shish</Button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Yangi Kategoriya Qo'shish
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <form className="flex flex-col gap-6 p-4" onSubmit={(e) => { e.preventDefault(); handleAddCategory(); }}>
          {["uz", "ru", "en", "kk"].map((lang) => (
            <Input
              key={lang}
              label={`Sarlavha (${lang.toUpperCase()})`}
              value={category[lang]}
              onChange={(e) => setCategory({ ...category, [lang]: e.target.value })}
              required
            />
          ))}
          <Button loading={loading} type="submit" className="bg-blue-500 text-white">Saqlash</Button>
        </form>
      </Drawer>
    </>
  );
}