export default function DocumentsHero() {
    return (
        <section className="my-[32px]">
            <div className="Container">
                <div className="flex items-center justify-center flex-col gap-[24px] w-full">
                    {Array?.from({ length: 8 }).map((i, index) => (
                        <div
                            key={index}
                            className="w-full border-[1px] px-[24px] py-[18px] bg-white cursor-pointer duration-500 hover:shadow-lg rounded-[8px] flex items-center gap-[10px] justify-between">
                            <div>
                                <span>
                                    O‘zbekiston Respublikasi Prezidentining qarorlari
                                </span>
                            </div>
                            <div className="text-[#A4A7AE] text-[30px]">
                            <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}