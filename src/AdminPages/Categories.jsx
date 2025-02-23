import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { $api } from "../utils";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { AddCategory } from "../AdminComponents/categories/add-category";
import { UpdateCategory } from "../AdminComponents/categories/update-category";
import { DialogDefault } from "../AdminComponents/categories/simple-dialog";

export default function Categories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("uz");


  const fetchData = async () => {
    try {
      const response = await $api.get("/category");
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

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => row.title[activeTab],
      sortable: true,
    },
    {
      name: `Categoriya detallari`,
      selector: (row) => {
        return <div>Batafsil</div>;
      },
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
          <UpdateCategory categoryData={row} onCategoryUpdated={fetchData} />
          <DialogDefault/>
        </div>
      ),
    },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Kategoriyalar</h2>
      <div className=" flex  justify-between items-center ">
        <div className="mb-4 flex space-x-2">
          {["uz", "ru", "en", "kk"].map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded ${
                activeTab === lang ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        <div>
          <AddCategory onCategoryAdded={fetchData} />
          <UpdateCategory />
        </div>
      </div>
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
