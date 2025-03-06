import React, { useState, useEffect } from "react";
import { $api } from "../utils";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { FaCheckCircle, FaEnvelopeOpenText, FaEnvelope } from "react-icons/fa";
import { DeleteMessage } from "../AdminComponents/message-user/delete-message";

export default function MessageUser() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const response = await $api.get("/message-user");
      setData(response.data.data);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id) => {
    try {
      await $api.post(`/message-status/${id}`, {
        status: "Javob berildi",
      });
      fetchData();
    } catch (error) {
      console.error("Status yangilashda xatolik yuz berdi:", error);
    }
  };

  const columns = [
    {
      name: "Tr",
      selector: (_, index) => (page - 1) * perPage + index + 1,
      sortable: true,
      width: "30px",
    },
    {
      name: "F.I.O",
      selector: (row) => <p className="whitespace-pre-wrap">{row.full_name}</p>,
      sortable: true,
      width: "220px",
    },
    {
      name: "Shahar",
      selector: (row) => row.city || "Noma'lum",
      sortable: true,
      width: "130px",
    },
    {
      name: "Tuman",
      selector: (row) => row.district || "Noma'lum",
      sortable: true,
      width: "130px",
    },
    {
      name: "Telefon",
      selector: (row) => row.phone,
      sortable: true,
      width: "130px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "260px",
    },
    {
      name: "Xabar matni",
      selector: (row) => (
        <p className="whitespace-pre-wrap max-h-[250px] overflow-y-auto">
          {row.message_text}
        </p>
      ),
      sortable: false,
      width: "330px",
    },
    {
      name: "Fayl",
      selector: (row) =>
        row.file.length > 0 ? (
          <a
            href={row.file[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 bg-blue-50 p-2 rounded-2xl underline"
          >
            Havola
          </a>
        ) : (
          "-"
        ),
      sortable: false,
      width: "90px",
    },
    {
      name: "Boshqaruv",
      selector: (row) =>
        row.managment ? (
          <div>
            <p className="font-bold">{row.managment.name}</p>
            <p>{row.managment.position.uz}</p>
            <p className="text-sm">{row.managment.reception_days}</p>
            <p className="text-blue-500">{row.managment.phone}</p>
            <p className="text-blue-500">{row.managment.email}</p>
          </div>
        ) : (
          "Mavjud emas"
        ),
      sortable: false,
      width: "280px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex items-center space-x-2">
          {row.status === "O'qilmadi" && (
            <FaEnvelope className="text-red-500" />
          )}
          {row.status === "O'qildi" && (
            <FaEnvelopeOpenText className="text-yellow-500" />
          )}
          {row.status === "Javob berildi" && (
            <FaCheckCircle className="text-green-500" />
          )}
          <button
            onClick={() => updateStatus(row.id)}
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
          >
            O'qish
          </button>
        </div>
      ),
      sortable: true,
      width: "100px",
    },
    {
      name: "O'chirish",
      selector: (row) => <DeleteMessage onDeleted={fetchData} rowId={row.id} />,
      sortable: true,
      width: "80px",
    },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Foydalanuvchi Xabarlari</h2>
      <CustomDataTable
        data={data}
        columns={columns}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </div>
  );
}
