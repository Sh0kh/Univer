import React, { useState, useEffect } from "react";
import { $api } from "../utils";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { AddCategoryDetail } from "../AdminComponents/category-detail/add-category-detail";

export default function OpenData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("uz");

  const fetchData = async () => {
    try {
      const response = await $api.get("/open-data");
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
      selector: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => row.name?.[activeTab] || "Noma'lum",
      sortable: true,
    },
    {
      name: `Kategoriya (${activeTab.toUpperCase()})`,
      selector: (row) => row?.category?.title?.[activeTab] || "Noma'lum",
      sortable: true,
    },
    {
      name: "URL",
      selector: (row) => (
        <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Havola
        </a>
      ),
      sortable: false,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
          {/* <UpdateCategoryDetail categoryData={row} onCategoryUpdated={fetchData} />
          <DeleteCategoryDetail categoryId={row.id} onCategoryDeleted={fetchData} /> */}
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
          <AddCategoryDetail onCategoryDetailAdded={fetchData} />
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
