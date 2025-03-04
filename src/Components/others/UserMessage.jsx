import axios from "axios";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import foto from "../../img/direktor.png";


export default function UserMessage() {

    const fileInputRef = useRef(null);
    const { i18n } = useTranslation();
    const { t } = useTranslation();


    const [formData, setFormData] = useState({
        region: "",
        district: "",
        city: "",
        fullName: "",
        phone: "",
        email: "",
        message: "",
        file: null,
    });

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, file }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("region", formData.region);
        data.append("district", formData.district);
        data.append("city", formData.city);
        data.append("full_name", formData.fullName);
        data.append("phone", formData.phone);
        data.append("email", formData.email);
        data.append("message_text", formData.message);
        data.append("management_id", "7");
        if (formData.file) {
            data.append("file", formData.file);
        }

        try {
            const response = await axios.post("/message", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // clear the
            setFormData({
                region: "",
                district: "",
                city: "",
                fullName: "",
                phone: "",
                email: "",
                message: "",
                file: null,
            });
            sweetAlert("Muvaffaqiyatli yuborildi", "success")
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    };

    return (
        <div>
            <div className="cb-or relative pb-4 flex items-center justify-start gap-[30px] pt-[20px]  mb-6 mt-[20px]">
                <h4 className="mt-[-20px] font-semibold text-[14px] leading-[143%] text-[#3538cd]">
                    {t('Murojaatyuborish')}
                </h4>
                <div className="absolute left-0 top-150 w-full border-t border-[#f5f5f5] -z-10"></div>
                <div className="absolute left-0 top-150 w-[113px] border-t-2 border-[#3538cd] -z-10"></div>
            </div>
            <div className="cabinet_wr grid grid-cols-3  gap-[50px]">
                <div className="cabinet_card  mr-[30px] ">
                    <h4
                        className="font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]"
                    >
                        {t('Viloyat')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <div className=" hover:shadow-lg duration-300 flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%]shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white">
                        <input
                            type="text"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            className="active:border-none font-normal  text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]"
                            placeholder={`${t('Tanlang')}`}
                        />
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4
                        className="font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]"
                    >
                        {t('Tuman')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <div className="hover:shadow-lg duration-300 flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white">
                        <input
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            className="active:border-none font-normal  text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]"
                            placeholder={`${t('Tanlang')}`}
                        />

                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="#717680"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4
                        className="font-medium  text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]"
                    >
                        {t('Shahar')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <div className="hover:shadow-lg duration-300 flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]"
                            placeholder={`${t('Tanlang')}`}
                        />

                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="#717680"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4
                        className="font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]"
                    >
                        {t('FISh')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <div className="hover:shadow-lg duration-300 flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%]shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]"
                            placeholder={`${t("Kiriting")}`}
                        />

                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="#717680"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4
                        className="font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]"
                    >
                        {t('Telefon')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <div className="hover:shadow-lg duration-300 flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] h-[44px] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]"
                            placeholder="+998"
                        />

                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="#717680"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="cabinet_card ">
                    <h4
                        className="font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[#414651]"
                    >
                        {t('Email')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <div className="hover:shadow-lg duration-300 flex items-center justify-between  border border-[#f5f5f5] rounded-lg p-[10px_14px] max-w-[410px] w-[100%] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white">
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="active:border-none font-normal text-[16px] leading-[150%] text-[#717680] border-none w-full max-w-[354px] h-[24px]"
                            placeholder="example@gmail.com"
                        />

                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="#717680"
                                stroke-width="1.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="cabinet_area mt-[40px]">
                <div className="area_wr flex items-center justify-start gap-[10px] ">
                    <h4
                        className="font-medium text-[14px] leading-[143%] mb-[10px]
                    mr-[-10px] text-[rgb(65,70,81)]"
                    >
                        {t('Xabarmatni')}
                        <span className="text-[#444ce7]">*</span>
                    </h4>
                    <svg
                        width="16"
                        height="16"
                        className="mt-[-10px]"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_4059_3273)">
                            <path
                                d="M6.05967 5.99998C6.21641 5.55442 6.52578 5.17872 6.93298 4.9394C7.34018 4.70009 7.81894 4.61261 8.28446 4.69245C8.74998 4.7723 9.17222 5.01433 9.47639 5.37567C9.78057 5.737 9.94705 6.19433 9.94634 6.66665C9.94634 7.99998 7.94634 8.66665 7.94634 8.66665M7.99967 11.3333H8.00634M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z"
                                stroke="#A4A7AE"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4059_3273">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <textarea
                    className="w-full max-w-[1280px]  h-[154px] border border-[#f5f5f5] rounded-lg p-[12px_14px] shadow-sm shadow-[rgba(10,13,18,0.05)] bg-white"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={`${t("Kiriting")}`}
                    name="message"
                ></textarea>

                <div className="cabinet_file mt-[40px]" onClick={handleClick}>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        accept=".doc,.pdf,.xls"
                        onChange={handleFileChange}
                    />
                    <div className="file_svg">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613"
                                stroke="#535862"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h1 className="file_h1">
                        <span>{t('Keraklifaylnibuyerga')}</span>{t('bosishorqaliyuklang')} <br />
                        .DOC, .PDF, .XLS (max. 5 MB)
                    </h1>
                </div>
                <button onClick={handleSubmit} className="file_sent">{t('Yuborish')}</button>
            </div>
        </div>
    )
}