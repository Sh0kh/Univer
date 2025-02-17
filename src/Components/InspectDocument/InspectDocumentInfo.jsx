export default function InspectDocumentInfo() {
    const content = `
        <p><strong>Toshkent kimyo-texnologiya instituti Yangiyer filialida jismoniy va yuridik shaxslarning murojaatlari bilan ishlash tartibi</strong><br><br> 
        Filialda jismoniy va yuridik shaxslarning murojaatlarini ko‘rib chiqish tartibi O‘zbekiston Respublikasining <strong>“Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida”</strong> gi Qonuniga muvofiq amalga oshiriladi. <br><br> 
        Ijrochi murojaat kelib tushgan kundan e’tiboran <strong>o‘n besh kun</strong> ichida, qo‘shimcha o‘rganish va (yoki) tekshirish, qo‘shimcha hujjatlarni so‘rab olish talab etilganda esa, <strong>bir oygacha bo‘lgan muddatda</strong> murojaatga asoslangan javob yuborish belgilangan. <br><br> 
        
        <strong>Murojaatlarni qabul qilish va ular bilan ishlash tartibi</strong><br> 
        Filialda jismoniy va yuridik shaxslarning murojaatlari quyidagi turlarga bo‘linadi: <br><br> 
        
        <strong>1. Og‘zaki murojaatlar</strong><br> 
        - <strong>Ishonch telefoni orqali</strong> (95 511-58-56) qabul qilinadi. Mas’ul bo‘lim xodimi tomonidan yozib olinib, ijro.uz tizimi orqali tegishli mas’ullarga yo‘naltiriladi.<br> 
        - <strong>Filial rahbariyati qabulida</strong> tasdiqlangan qabul rejalari asosida amalga oshiriladi. Murojaatchilar maxsus jurnallarga qayd etilib, rahbariyat qabulxonasiga yo‘naltiriladi. <br><br> 
        
        <strong>2. Yozma murojaatlar</strong><br> 
        - <strong>O‘zbekiston Respublikasi Prezidentining cabinetpm2.gov.uz sayti orqali</strong>, O‘zbekiston Respublikasi raqamli texnologiyalar vazirligi va Oliy ta’lim, fan va innovatsiyalar vazirligi orqali, shuningdek edo.ijro.uz tizimi orqali yuborilgan murojaatlar universitet bo‘limining mas’ul xodimi tomonidan tegishli ijrochilarga yo‘naltiriladi. <br> 
        - <strong>Bevosita filial bo‘limiga kelib yozib qoldirilgan murojaatlar</strong> maxsus ro‘yxatga olish jurnallarida qayd etilib, tegishli ijrochilarga yuboriladi. <br> 
        - <strong>Filial direktorining virtual qabulxonasi orqali yuborilgan murojaatlar</strong> mas’ul xodim tomonidan qabul qilinib, filial mas’ullarining elektron manziliga yuboriladi. So‘ng murojaat bo‘yicha javob xati tayyorlanib, murojaatchining elektron manziliga jo‘natiladi. <br><br> 
        
        Yuqorida keltirilgan barcha turdagi murojaatlar Filialning <strong>“Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring”</strong> bo‘limi mas’ul xodimi tomonidan ro‘yxatga olinib, o‘z vaqtida murojaatga asoslangan javob yuborilishi bo‘yicha nazorat qilinadi.
        </p>
    `;

    return (
        <section className="my-[20px] md:my-[30px] lg:my-[40px]">
            <div className="Container">
                <h1 className="text-[#181D27] text-[24px] md:text-[28px] lg:text-[30px] font-semibold mb-[15px] md:mb-[20px]">
                    Toshkent kimyo-texnologiya instituti Yangiyer filialida jismoniy va yuridik shaxslarning murojaatlari bilan ishlash tartibi
                </h1>
                <div className="text-[#535862] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] md:leading-[1.7]">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </section>
    );
}
