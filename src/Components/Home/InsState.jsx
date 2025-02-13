const InstituteStats = () => {
    const stats = [
      { title: "Talabalar soni", value: "5 877", icon: "🎓" },
      { title: "Professor o‘qituvchilar", value: "120", icon: "👨‍🏫" },
      { title: "Fakultetlar soni", value: "16", icon: "🏛" },
      { title: "Ta’lim yo‘nalishlari", value: "21", icon: "📚" }
    ];
  
    return (
      <div className="relative bg-[#1f235b] text-white py-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/background-image.jpg')" }}></div>
  
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold">Institut faoliyati bo‘yicha raqamli statistika</h2>
          <p className="text-gray-300">Bugungi kunga qadar faoliyatimizga oid raqamlar bilan tanishishingiz mumkin</p>
  
          {/* Statistikalar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
                <div className="text-4xl">{stat.icon}</div>
                <p className="text-lg font-semibold mt-2">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default InstituteStats;
  