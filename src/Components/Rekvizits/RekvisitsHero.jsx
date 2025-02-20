export default function RekvisitsHero() {
    const info = [
      { title: "Manzil", value: "Yangiyer shahar, Tinchlik ko‘chasi, 1-uy" },
      { title: "Telefon", value: "+998 90 123 45 67" },
      { title: "Hisob raqam", value: "2340 2000 3001 0000 1010" },
      { title: "Hisob raqam", value: "2340 2000 3001 0000 1010" },
      { title: "Bank", value: "Markaziy bank" },
      { title: "MFO", value: "00014" },
      { title: "Shaxsiy hisob raqam", value: "4001 1086 0244 1370 9410 0350 0010" },
      { title: "STIR", value: "306 598 518" },
      { title: "OKONX", value: "85420" },
      

    ];
  
    return (
      <section>
        <div className="Container">
          <h1  className="mt-[20px] mb-[20px] font-semibold text-xl leading-[150%] text-[#0a0d12]">
            Toshkent kimyo-texnologiya instituti Yangiyer filiali rekvizitlari
          </h1>
  
            {info.map((item, index) => (
              <div  key={index} className="rek_card flex items-center justify-start border-b border-[#e9eaeb] p-[16px_24px] max-w-[1280px] w-[100%] gap-[250px] h-[72px]">
               <h1 className="w-[200px]">{item.title}</h1>
                <h2>{item.value}</h2>
               
              </div>
            ))}
        </div>
      </section>
    );
  }
  