import React, { useState, useEffect } from "react";
import { $api } from "../utils";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { AddRegularlyDoc } from "../AdminComponents/regularly-doc/add-regularly-doc";
import { UpdateRegularlyDoc } from "../AdminComponents/regularly-doc/update-regularly-doc";
import { DeleteRegularlyDoc } from "../AdminComponents/regularly-doc/delete-regularly-doc";

export default function InternationalRelations() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("uz");

  const fetchData = async () => {
    try {
      const response = await $api.get("/international-relations");
      setData(response.data.data); // API dan kelgan data-ni state-ga saqlaymiz
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("Fetched data ", data);

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: "Tr",
      selector: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => row.title?.[activeTab] || "Noma'lum",
      sortable: true,
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => row.description?.[activeTab] || "Noma'lum",
      sortable: true,
    },
    {
      name: `Kategoriya (${activeTab.toUpperCase()})`,
      selector: (row) => row?.category?.title?.[activeTab] || "Noma'lum",
      sortable: true,
    },
    {
      name: `Slug`,
      selector: (row) => row?.slug || "Noma'lum",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
            {/* <UpdateRegularlyDoc onUpdated={fetchData} rowData={row} />
            <DeleteRegularlyDoc onDeleted={fetchData} rowId={row.id} /> */}
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
      <h2 className="text-xl font-bold mb-4">Ochiq ma'lumotlar</h2>
      <div className="mb-4 flex justify-between items-center">
        <div className="mb-4 flex space-x-2">
          {["uz", "ru", "en", "kk"].map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded ${activeTab === lang ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveTab(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        <div>
          {/* <AddRegularlyDoc onAdded={fetchData} /> */}
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
