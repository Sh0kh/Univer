import React, { useState, useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { $api } from "../../utils";

export function UpdateCategory({ categoryData, onCategoryUpdated }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState({ uz: categoryData?.title?.uz, ru: categoryData?.title?.ru, en: "", kk: "" });

  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData.title);
    }
  }, [categoryData]);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => {
    setOpen(false);
    setCategory({ uz: "", ru: "", en: "", kk: "" });
  };

  const handleUpdateCategory = async () => {
    try {
      await $api.put(`/category/${categoryData.id}`, { title: category });
      onCategoryUpdated();
      closeDrawer();
    } catch (error) {
      console.error("Kategoriya yangilashda xatolik:", error);
    }
  };

  return (
    <>
      <Button onClick={openDrawer} className="bg-yellow-500 text-white">Edit</Button>
      <Drawer suppressContentEditableWarning open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Kategoriya Tahrirlash
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
        <form className="flex flex-col gap-6 p-4" onSubmit={(e) => { e.preventDefault(); handleUpdateCategory(); }}>
          {["uz", "ru", "en", "kk"].map((lang) => (
            <Input
              key={lang}
              label={`Sarlavha (${lang.toUpperCase()})`}
              value={category[lang]}
              onChange={(e) => setCategory({ ...category, [lang]: e.target.value })}
              required
            />
          ))}
          <Button type="submit" className="bg-blue-500 text-white">Yangilash</Button>
        </form>
      </Drawer>
    </>
  );
}
