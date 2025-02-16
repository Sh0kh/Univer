import content from '../../img/Content.png'
import AboutView from './AboutView'
export default function AboutContent(){
    return(
        <section className="aboutContent pt-[20px] pb-[20px]">
            <div className="Container">
                <div className="top_content">
                    <h1 className="mb-[10px] font-[var(--font-family)] font-semibold text-[30px] leading-[127%] text-[#181d27]">Toshkent kimyo-texnologiya instituti Yangiyer filiali</h1>
                    <p className='mb-[20px]'>Toshkent kimyo-texnologiya instituti Yangiyer filiali - kimyoviy texnologiya, oziq-ovqat texnologiyasi, neft va gazni qayta ishlash texnologiyasi, energetika muhandisligi, atrof-muhit muhandisligi, texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish, iqtisodiyot, menejment va boshqa yo‘nalishlar bo‘yicha yuqori malakali mutaxassislar tayyorlashga ixtisoslashgan yetakchi oliygohlardan biri hisoblanadi. <br />
                    
                    Toshkent kimyo-texnologiya instituti Yangiyer filiali Vazirlar Mahkamasining  2019-yil 9-iyuldagi 573-sonli qarori bilan tashkil etilgan. Hududi 12 gektar bo‘lib, 1300 o‘rinli asosiy o‘quv binosi, 1 ta yopiq sport zali va 3 ta ochiq sport maydonlari, texnopark kompleksi hamda 400 o‘rinli talabalar turar joyini o‘z ichiga olgan kampusdan iborat. Filialda 1 ta fakultet, 6 ta kafedra, 2 ta texnopark va 14 ta ilmiy va o‘quv laboratoriyalari mavjud.

                    </p>
                </div>
                <img className="mb-[30px]max-w-[1280px] w-[100%] h-[480px] rounded-[12px] object-cover" src={content} alt="" />
                <p className='mt-[20px]'>Filial to‘rt yillik bakalavriat dasturlari va ikki yillik magistrlik dasturlari bo‘yicha akkreditatsiyadan o'tgan. Bugungi kunda filialda 10 ta ta’lim yo‘nalishi bo‘yicha kunduzgi, 7 ta ta’lim yo‘nalishi bo‘yicha sirtqi, 3 ta magistratura mutaxassisligi hamda qo‘shma ta’lim dasturlari asosida 2 ta sirtqi ta’lim yo‘nalishlari bo‘yicha kadrlar tayyorlash yo‘lga qo‘yilgan. Jami 3510 nafar talabalarga 131 nafardan ortiq professor-o‘qituvchilar tomonidan ta’lim va tarbiya berib kelinmoqda Professor-o‘qituvchilarning ilmiy salohiyati so‘nggi uch yilda 2.3% dan 50.4% ga ko‘tarilgan. <br />
                Filial bosh binosining birinchi qavatida Book cafe va fondi 537 nomdagi 3049 nusxa bosma hamda 10000 dan ortiq elektron variantdagi o‘quv, badiiy, ilmiy va boshqa adabiyotlardan iborat bo‘lgan Axborot resurs markazi joylashgan. Shuningdek, birinchi qavatda Inkubasiya va akselerasiya markazi mavjud bo‘lib,  tarkibida Robototexnika, IT va Soft injinering texnologiyalari xonalari  joylashgan. Bu yerda talabalar yoshlar va maktab o‘quvchilari ishtirokida elektron qurilmalar va dasturiy ta’minotlar yaratish yo‘lga qo‘yilgan. Birinchi qavatda 2 ta ma’ruza zali va 200 o‘rinli faollar zali ham mavjud. Filial ma’muriyatining boshqaruv tuzilmasi 2 qavatda joylashgan.
                </p>
             <AboutView/>
            </div>
        </section>
    )
}