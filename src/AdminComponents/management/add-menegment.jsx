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
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Checkbox,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { $api } from "../../utils";
import { sweetAlert } from "../../utils/sweetalert";

export function AddManagement({ onAdded }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [form, setForm] = useState({
    name: "",
    position: { uz: "", ru: "", en: "", kk: "" },
    reception_days: "",
    phone: "",
    email: "",
    image: "",
    message_receiver: false,
  });

  const handleOpen = () => setOpen(!open);

  const handleInputChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handlePositionChange = (e, lang) => {
    setForm({
      ...form,
      position: { ...form.position, [lang]: e.target.value },
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);

    const formData = new FormData();
    formData.append("photo", imageFile);
  };

  const handleAdd = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("position[uz]", form.position.uz);
      formData.append("position[ru]", form.position.ru);
      formData.append("position[en]", form.position.en);
      formData.append("position[kk]", form.position.kk);
      formData.append("reception_days", form.reception_days);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("photo", imageFile);
      formData.append("message_receiver", form.message_receiver);

      await $api.post("/management", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onAdded();
      setForm({
        name: "",
        position: { uz: "", ru: "", en: "", kk: "" },
        reception_days: "",
        phone: "",
        email: "",
        image: "",
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
        Rahbariyat qo‘shish
      </Button>

      <Dialog open={open} handler={handleOpen} size="lg" className="p-4">
        <DialogHeader className="relative">
          <Typography variant="h4" color="blue-gray">
            Yangi Rahbariyat Qo‘shish
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
          <div className="grid grid-cols-2 gap-4">
            {["uz", "ru", "en", "kk"].map((lang) => (
              <div key={lang}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Lavozim ({lang == "kk" ? "CHI" : lang.toUpperCase()})
                </Typography>
                <Input
                  value={form.position[lang]}
                  onChange={(e) => handlePositionChange(e, lang)}
                  required
                />
              </div>
            ))}
            <Input
              label="F.I.O"
              value={form.name}
              onChange={(e) => handleInputChange(e, "name")}
              required
            />
            <Input
              label="Qabul kunlari"
              value={form.reception_days}
              onChange={(e) => handleInputChange(e, "reception_days")}
              required
            />
            <Input
              label="Telefon"
              value={form.phone}
              onChange={(e) => handleInputChange(e, "phone")}
              required
            />
            <Input
              label="Email"
              value={form.email}
              onChange={(e) => handleInputChange(e, "email")}
              required
            />
            <Card className="w-full max-w-[24rem]">
              <List className="flex-row">
                <ListItem
                  className="p-2 cursor-pointer"
                  onClick={() =>
                    setForm({
                      ...form,
                      message_receiver: !form.message_receiver,
                    })
                  }
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      type="checkbox"
                      checked={form.message_receiver}
                      readOnly
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-blue-gray-400"
                  >
                    Murojaatlar qabul qiluvchi
                  </Typography>
                </ListItem>
              </List>
            </Card>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Rasm yuklash
              </Typography>
              <Input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            onClick={handleAdd}
            disabled={loading}
            className="bg-blue-500 text-white"
          >
            {loading ? "Saqlanmoqda..." : "Saqlash"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
