import Foto from '../../img/Ut.png'
import Foto1 from '../../img/image 2 (1).png'
import Foto2 from '../../img/w1.png'
import Foto3 from '../../img/image 3 (1).png'
import Foto4 from '../../img/image 4.png'
import Foto5 from '../../img/image 5.png'
import Foto6 from '../../img/image 7.png'
import Foto7 from '../../img/image 8.png'



export default function PartnersHero() {
    const images = [
        { src: Foto1, alt: 'Foto 1' },
        { src: Foto2, alt: 'Foto 2' },
        { src: Foto3, alt: 'Foto 3' },
        { src: Foto4, alt: 'Foto 4' },
        { src: Foto5, alt: 'Foto 5' },
        { src: Foto, alt: 'Foto 6' },
        { src: Foto6, alt: 'Foto 7' },
        { src: Foto7, alt: 'Foto 8' },
    ]

    return (
        <section className='mt-8 mb-8'>
            <div className="Container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="bg-[#FDFDFD] hover:shadow-lg cursor-pointer duration-500 border py-5 flex items-center justify-center border-[#F5F5F5] rounded-lg"
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
