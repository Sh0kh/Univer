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
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "F.I.O",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      name: "Telefon",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Xabar matni",
      selector: (row) => row.message_text,
      sortable: false,
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
            Yangilash
          </button>
        </div>
      ),
      sortable: true,
    },
    {
      name: "O'chirish",
      selector: (row) => <DeleteMessage onDeleted={fetchData} rowId={row.id} />,
      sortable: true,
      width: "120px",
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
