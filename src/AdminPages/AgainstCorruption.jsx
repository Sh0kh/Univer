import React, { useState, useEffect } from "react";
import { $api } from "../utils";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { AddCorruption } from "../AdminComponents/against-corruption/add-corruption";
import { UpdateCorruption } from "../AdminComponents/against-corruption/update-corruption";
import { DeleteCorruption } from "../AdminComponents/against-corruption/delete-corruption";

export default function AgainstCorruption() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("uz");

  const fetchData = async () => {
    try {
      const response = await $api.get("/fighting-corruption");
      setData(response.data.data); // API dan kelgan data-ni state-ga saqlaymiz
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: "Tr",
      selector: (_, index) => (page - 1) * perPage + index + 1,
      width: "80px",
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => (
        <p className="whitespace-pre-wrap">{row.name?.[activeTab] || "Noma'lum"}</p>
      ),
      sortable: true,
    },
    {
      name: "URL",
      selector: (row) =>
        row.url ? (
          <a
            href={row.url.startsWith("http") ? row.url : `https://${row.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Havola
          </a>
        ) : (
          "Url mavjud emas"
        ),
      sortable: false,
      width: "250px",
    },
    {
      name: "File",
      selector: (row) =>
        row.file && Array.isArray(row.file) && row.file.length > 0 ? (
          <a
            href={row.file[row.file.length - 1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Havola
          </a>
        ) : (
          "Fayl mavjud emas"
        ),
      sortable: false,
      width: "250px",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
            <UpdateCorruption onUpdated={fetchData} rowData={row} />
            <DeleteCorruption onDeleted={fetchData} rowId={row.id} />
        </div>
      ),
      width: "170px",
    },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Karrupsiyaga Qarshi</h2>
      <div className="mb-4 flex justify-between items-center">
        <div className="mb-4 flex space-x-2">
          {["uz", "ru", "en", "kk"].map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded ${activeTab === lang ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveTab(lang)}
            >
              {lang == "kk" ? "CHI" : lang.toUpperCase()}
            </button>
          ))}
        </div>
        <div>
          <AddCorruption onAdded={fetchData} />
        </div>
      </div>
      <CustomDataTable
        data={data} // To‘g‘ri data state-ni uzatamiz
        columns={columns}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </div>
  );
}
