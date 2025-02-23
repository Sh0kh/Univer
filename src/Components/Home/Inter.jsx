import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';

// const data = [
//     {
//       id: 1,
//       title: "Kunduzgi ta’lim platformasi",
//       icon: (
//         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M5 10.4547V16.4658C5 16.8248 5 17.0042 5.05465 17.1627C5.10299 17.3028 5.18187 17.4304 5.28558 17.5363C5.40287 17.6561 5.5634 17.7364 5.88446 17.8969L11.2845 20.5969C11.5468 20.7281 11.678 20.7937 11.8156 20.8195C11.9375 20.8423 12.0625 20.8423 12.1844 20.8195C12.322 20.7937 12.4532 20.7281 12.7155 20.5969L18.1155 17.8969C18.4366 17.7364 18.5971 17.6561 18.7144 17.5363C18.8181 17.4304 18.897 17.3028 18.9453 17.1627C19 17.0042 19 16.8248 19 16.4658V10.4547M2 8.95465L11.6422 4.13354C11.7734 4.06795 11.839 4.03515 11.9078 4.02225C11.9687 4.01081 12.0313 4.01081 12.0922 4.02225C12.161 4.03515 12.2266 4.06795 12.3578 4.13354L22 8.95465L12.3578 13.7758C12.2266 13.8414 12.161 13.8742 12.0922 13.8871C12.0313 13.8985 11.9687 13.8985 11.9078 13.8871C11.839 13.8742 11.7734 13.8414 11.6422 13.7758L2 8.95465Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//       )
//     }, 
//     {
//       id: 2,
//       title: "Sirtqi ta’lim platformasi",
//       icon: (
//         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M5 10.4547V16.4658C5 16.8248 5 17.0042 5.05465 17.1627C5.10299 17.3028 5.18187 17.4304 5.28558 17.5363C5.40287 17.6561 5.5634 17.7364 5.88446 17.8969L11.2845 20.5969C11.5468 20.7281 11.678 20.7937 11.8156 20.8195C11.9375 20.8423 12.0625 20.8423 12.1844 20.8195C12.322 20.7937 12.4532 20.7281 12.7155 20.5969L18.1155 17.8969C18.4366 17.7364 18.5971 17.6561 18.7144 17.5363C18.8181 17.4304 18.897 17.3028 18.9453 17.1627C19 17.0042 19 16.8248 19 16.4658V10.4547M2 8.95465L11.6422 4.13354C11.7734 4.06795 11.839 4.03515 11.9078 4.02225C11.9687 4.01081 12.0313 4.01081 12.0922 4.02225C12.161 4.03515 12.2266 4.06795 12.3578 4.13354L22 8.95465L12.3578 13.7758C12.2266 13.8414 12.161 13.8742 12.0922 13.8871C12.0313 13.8985 11.9687 13.8985 11.9078 13.8871C11.839 13.8742 11.7734 13.8414 11.6422 13.7758L2 8.95465Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
// </svg>
//       )
//     },
//     {
//         id: 3,
//         title: "Dars jadvallari",
//         icon: (
//             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M21 10.4546H3M16 2.45459V6.45459M8 2.45459V6.45459M7.8 22.4546H16.2C17.8802 22.4546 18.7202 22.4546 19.362 22.1276C19.9265 21.84 20.3854 21.381 20.673 20.8166C21 20.1748 21 19.3347 21 17.6546V9.25459C21 7.57443 21 6.73435 20.673 6.09262C20.3854 5.52813 19.9265 5.06919 19.362 4.78157C18.7202 4.45459 17.8802 4.45459 16.2 4.45459H7.8C6.11984 4.45459 5.27976 4.45459 4.63803 4.78157C4.07354 5.06919 3.6146 5.52813 3.32698 6.09262C3 6.73435 3 7.57443 3 9.25459V17.6546C3 19.3347 3 20.1748 3.32698 20.8166C3.6146 21.381 4.07354 21.84 4.63803 22.1276C5.27976 22.4546 6.11984 22.4546 7.8 22.4546Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         )
//       }
//       ,{
//         id: 4,
//         title: "Onlayn kutubxona",
//         icon: (
//             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 21.4546L11.8999 21.3045C11.2053 20.2625 10.858 19.7416 10.3991 19.3644C9.99286 19.0305 9.52476 18.78 9.02161 18.6272C8.45325 18.4546 7.82711 18.4546 6.57482 18.4546H5.2C4.07989 18.4546 3.51984 18.4546 3.09202 18.2366C2.71569 18.0449 2.40973 17.7389 2.21799 17.3626C2 16.9347 2 16.3747 2 15.2546V6.65459C2 5.53448 2 4.97443 2.21799 4.54661C2.40973 4.17028 2.71569 3.86432 3.09202 3.67258C3.51984 3.45459 4.07989 3.45459 5.2 3.45459H5.6C7.84021 3.45459 8.96031 3.45459 9.81596 3.89056C10.5686 4.27406 11.1805 4.88598 11.564 5.63863C12 6.49427 12 7.61438 12 9.85459M12 21.4546V9.85459M12 21.4546L12.1001 21.3045C12.7947 20.2625 13.142 19.7416 13.6009 19.3644C14.0071 19.0305 14.4752 18.78 14.9784 18.6272C15.5467 18.4546 16.1729 18.4546 17.4252 18.4546H18.8C19.9201 18.4546 20.4802 18.4546 20.908 18.2366C21.2843 18.0449 21.5903 17.7389 21.782 17.3626C22 16.9347 22 16.3747 22 15.2546V6.65459C22 5.53448 22 4.97443 21.782 4.54661C21.5903 4.17028 21.2843 3.86432 20.908 3.67258C20.4802 3.45459 19.9201 3.45459 18.8 3.45459H18.4C16.1598 3.45459 15.0397 3.45459 14.184 3.89056C13.4314 4.27406 12.8195 4.88598 12.436 5.63863C12 6.49427 12 7.61438 12 9.85459" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         )
//       }
//       ,{
//         id: 5,
//         title: "Rektorning virtual qabulxonasi",
//         icon: (
//             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M4.85864 6.45459C6.67357 4.60323 9.20268 3.45459 12.0001 3.45459C14.7975 3.45459 17.3266 4.60323 19.1415 6.45459M16.4723 9.45459C15.3736 8.22709 13.777 7.45459 12 7.45459C10.223 7.45459 8.62647 8.22709 7.52783 9.45459M12 17.4546C13.5105 17.4546 14.9608 17.7122 16.3094 18.1859C16.3542 18.2016 16.3767 18.2095 16.412 18.2251C16.7326 18.3663 16.9788 18.7137 17.0058 19.063C17.0088 19.1015 17.0088 19.1357 17.0088 19.204C17.0088 19.4367 17.0088 19.5531 17.0185 19.6511C17.1122 20.6003 17.8631 21.3512 18.8123 21.4449C18.9103 21.4546 19.0267 21.4546 19.2594 21.4546H19.5044C19.965 21.4546 20.1952 21.4546 20.3868 21.4168C21.1829 21.2599 21.8053 20.6375 21.9622 19.8414C22 19.6498 22 19.4195 22 18.959V18.7608C22 18.2856 22 18.0479 21.9493 17.7755C21.8358 17.1664 21.3933 16.4129 20.9166 16.017C20.7035 15.84 20.5589 15.7594 20.2698 15.5981C17.822 14.2326 15.0019 13.4546 12 13.4546C8.99812 13.4546 6.17797 14.2327 3.73021 15.5981C3.4411 15.7594 3.29654 15.84 3.0834 16.017C2.60675 16.4129 2.16421 17.1664 2.05074 17.7755C2 18.0479 2 18.2856 2 18.7608V18.959C2 19.4195 2 19.6498 2.03776 19.8414C2.19469 20.6375 2.81709 21.2599 3.61321 21.4168C3.80476 21.4546 4.03504 21.4546 4.4956 21.4546H4.74057C4.97332 21.4546 5.0897 21.4546 5.18773 21.4449C6.13689 21.3512 6.8878 20.6003 6.98152 19.6511C6.9912 19.5531 6.9912 19.4367 6.9912 19.204C6.9912 19.1357 6.9912 19.1015 6.99418 19.063C7.02122 18.7137 7.2674 18.3663 7.58798 18.2251C7.62335 18.2095 7.64577 18.2016 7.69061 18.1859C9.03921 17.7122 10.4895 17.4546 12 17.4546Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         )
//       },
//       {
//         id: 6,
//         title: "Kontrakt to’lash uchun rekvizitlar",
//         icon: (
//             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M17.5 6.95459L6.5 17.9546M8.5 10.9546V6.95459M6.5 8.95459H10.5M13.5 15.9546H17.5M7.8 21.4546H16.2C17.8802 21.4546 18.7202 21.4546 19.362 21.1276C19.9265 20.84 20.3854 20.381 20.673 19.8166C21 19.1748 21 18.3347 21 16.6546V8.25459C21 6.57443 21 5.73435 20.673 5.09262C20.3854 4.52813 19.9265 4.06919 19.362 3.78157C18.7202 3.45459 17.8802 3.45459 16.2 3.45459H7.8C6.11984 3.45459 5.27976 3.45459 4.63803 3.78157C4.07354 4.06919 3.6146 4.52813 3.32698 5.09262C3 5.73435 3 6.57443 3 8.25459V16.6546C3 18.3347 3 19.1748 3.32698 19.8166C3.6146 20.381 4.07354 20.84 4.63803 21.1276C5.27976 21.4546 6.11984 21.4546 7.8 21.4546Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         )
//       }
//   ];
  
  export default function Inter() {
    

  const [data, setData] = useState([])
  const { i18n } = useTranslation(); // Получаем текущий язык
  const [loading, setLoading] = useState(true)
  const getInterService = async () => {
    try {
      const response = await axios.get(`/interactives-service`)
      setData(response?.data?.data)
    console.log(response);

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  }
  useEffect(() => {
    getInterService()
  }, [])

    return (
      <section className="inter p-[60px]">
        <div className="Container">
          <div className="relative pb-4 mb-6">
            <h2 className="text-3xl font-bold text-[#1f235b] relative inline-block mb-[20px] bg-white pr-4 z-10">
              • Interaktiv xizmatlar
            </h2>
            <div className="absolute left-0 top-150 w-full border-t border-[#1f235b] -z-10"></div>
            <div className="absolute left-0 top-150 w-1/4 border-t-2 border-[#1f235b] -z-10"></div>
          </div>
  
          <div className="inter_wr grid grid-cols-2   gap-[40px] ">
            {data?.map((item) => (
              <div key={item.id} className=" inter_card hover:shadow-lg hover:shadow-xl duration-500 w-[auto] ">
                <div className="img_c w-[52px] h-[52px] bg-[#1f235b] p-[14px]">
                  <img src={item?.image?.url} alt="" />
                </div>
                <h4>{item?.title[i18n.language] || news.title["uz"]}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  