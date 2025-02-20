export default function CenterHero() {
    const departments = [
      "O‘quv uslubiy bo‘limi",
      "Yoshlar ittifoqi va koordinatorlar",
      "Talabalarni turar joy bilan ta’minlash",
      "Psixolog",
      "Marketing va talabalar amaliyoti bo‘limi",
      "Bosh muhandis",
      "Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy-pedagogik kadrlar tayyorlash bo‘limi",
      "Fuqaro va mehnat muhofazasi bo‘limi",
      "Xalqaro hamkorlik bo‘limi",
      "Texnik-foydalanish va xo‘jalik bo‘limi",
      "Iqtidorli talabalarni ilmiy-tadqiqot faoliyatini tashkil etish bo‘limi",
      "Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo‘limi",
      "Ilmiy innovatsion ishlanmalarni tijoratlashtirish bo‘limi",
      "Korrupsiyaga qarshi kurashish 'Komplaens-nazorat' tizimini boshqarish bo‘limi",
      "Yoshlar bilan ishlash, ma’naviyat va ma’rifat bo‘limi",
      "Reja-moliya bo‘limi",
      "Reja-moliya bo‘limi",

      "Reja-moliya bo‘limi",

    ];
    const center = [
      "Raqamli ta’lim texnologiyalari markazi",
      "Axborot-resurs markazi",
      "Registrator ofisi",
      ];
    return (
      <section className="py-10 px-4 md:px-10 lg:px-20">
        <h2 className="text-2xl text-[#0a0d12] font-bold text-gray-900 mb-6">Bo‘limlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="center_wr  cursor-pointer max-x-[410px] w-[100%] hover:shadow-lg hover:shadow-xl  h-[80px] border border-[#f5f5f5] rounded-lg shadow-sm bg-white flex items-center px-4"
            >
              <div className="border-l-4  border-[#a4a7ae] pl-4">
                <span className="font-medium text-center text-[14px] text-[#181d27] mx-auto">
                  {dept}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-[#0a0d12] mt-6 mb-6">Markazlar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {center.map((dept, index) => (
            <div
              key={index}
              className="max-x-[410px] w-[100%] hover:shadow-lg hover:shadow-xl h-[64px] border border-[#f5f5f5] rounded-lg shadow-sm bg-white flex items-center px-4"
            >
              <div className="border-l-4  border-[#a4a7ae] pl-4">
                <span className="font-medium text-center text-[14px] text-[#181d27] mx-auto">
                  {dept}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  