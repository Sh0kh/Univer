import Foto from '../../img/Ut.png'

export default function PartnersHero() {
    return (
        <section className='mt-8 mb-8'>
            <div className="Container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#FDFDFD] hover:shadow-lg cursor-pointer duration-500 border py-5 flex items-center justify-center border-[#F5F5F5] rounded-lg"
                        >
                            <img src={Foto} alt="Foto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
