import React, { useState, useEffect } from "react";
import CustomDataTable from "../lib/custom-data-table";
import Loader from "../lib/loader";
import { $api } from "../utils";
import { Tooltip } from "@material-tailwind/react";
import { AddRecvisitsDialog } from "../AdminComponents/recvisits/add-recvisit-dialog";
import { UpdateRecvisitDialog } from "../AdminComponents/recvisits/update-recvisit-dialog";
import { DeleteRecvisitDialog } from "../AdminComponents/recvisits/delete-recvisit-dialog";

export default function Recvisits() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("uz");

  const fetchData = async () => {
    try {
      const response = await $api.get("/requisites");
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
      name: "Tr",
      selector: (_, index) => (
        <Tooltip content={`Tartib raqam: ${index + 1}`} placement="right">
          <span>{index + 1}</span>
        </Tooltip>
      ),
      width: "80px",
    },
    {
      name: `Sarlavha (${activeTab.toUpperCase()})`,
      selector: (row) => (
        <Tooltip content={row.title[activeTab]} placement="right">
          <span>{row.title[activeTab]}</span>
        </Tooltip>
      ),
      sortable: true,
    },
    {
      name: "Manzil",
      selector: (row) => (
        <Tooltip content={row.address} placement="right">
          <span>{row.address}</span>
        </Tooltip>
      ),
    },
    {
      name: "Telefon",
      selector: (row) => (
        <Tooltip content={row.phone} placement="right">
          <span>{row.phone}</span>
        </Tooltip>
      ),
    },
    {
      name: "Hisob raqami",
      selector: (row) => (
        <Tooltip content={row.account_number} placement="right">
          <span>{row.account_number}</span>
        </Tooltip>
      ),
    },
    {
      name: "Bank",
      selector: (row) => (
        <Tooltip content={row.bank} placement="right">
          <span>{row.bank}</span>
        </Tooltip>
      ),
    },
    {
      name: "MFO",
      selector: (row) => (
        <Tooltip content={row.mfo} placement="right">
          <span>{row.mfo}</span>
        </Tooltip>
      ),
    },
    {
      name: "Shaxsiy hisob",
      selector: (row) => (
        <Tooltip content={row.personal_account} placement="right">
          <span>{row.personal_account}</span>
        </Tooltip>
      ),
    },
    {
      name: "STIR",
      selector: (row) => (
        <Tooltip content={row.stir} placement="right">
          <span>{row.stir}</span>
        </Tooltip>
      ),
    },
    {
      name: "OKNOX",
      selector: (row) => (
        <Tooltip content={row.oknox} placement="right">
          <span>{row.oknox}</span>
        </Tooltip>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
            <UpdateRecvisitDialog onUpdated={fetchData} rowData={row} />
            <DeleteRecvisitDialog onDeleted={fetchData} rowId={row.id} />
        </div>
      ),
      width: "170px",
    },
  ];

  if (loading) return <Loader />;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Rekvizitlar</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
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
        <AddRecvisitsDialog onAdded={fetchData} />
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
