import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { $api } from "../utils";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { AddCategoryDetail } from "../AdminComponents/category-detail/add-category-detail";
import { UpdateCategoryDetail } from "../AdminComponents/category-detail/update-category-detail";
import { DeleteCategoryDetail } from "../AdminComponents/category-detail/delete-category-detail";

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const [details, setDetails] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("uz");

  const fetchData = async () => {
    try {
      const { data } = await $api.get(`/category/${categoryId}`);
      setCategoryTitle(data?.data?.title || {});
      setDetails(data?.data?.details || []);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  const columns = [
    {
      name: "Tr",
      selector: (row, index) => index + 1,
      width: "80px",
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => row.title[activeTab],
      sortable: true,
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
          <UpdateCategoryDetail categoryData={row} onCategoryUpdated={fetchData} />
          <DeleteCategoryDetail categoryId={row.id} onCategoryDeleted={fetchData} />
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
      <h2 className="text-xl font-bold mb-4">
        {categoryTitle[activeTab]} - Kategoriya Tafsilotlari
      </h2>
      <div className="mb-4 flex justify-between items-center">
        <div className="mb-4 flex space-x-2">
          {["uz", "ru", "en", "kk"].map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded ${
                activeTab === lang ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab(lang)}
            >
               {lang == "kk" ? "CHI" : lang.toUpperCase()}
            </button>
          ))}
        </div>
        <div>
          <AddCategoryDetail onCategoryDetailAdded={fetchData} />
        </div>
      </div>
      <CustomDataTable
        data={details}
        columns={columns}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </div>
  );
}
