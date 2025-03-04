import Foto from '../../img/2025.png'

export default function FooterTop() {
    return (
        <div className="footertop flex items-center justify-between h-[158px] py-[48px]">
            <div className="footertop_content">
                <h1 class="font-[var(--font-family)] font-semibold text-[20px] leading-[150%] text-white">
                    Yangiliklarga a’zo bo’lishni istaysizmi?
                </h1>

                <p class="mt-[10px] font-[var(--font-family)] font-normal text-[16px] leading-[150%] text-[#a4a7ae]">
                    Doim sizni xabardor qilishimiz mumkin
                </p>

            </div>

            <div className="footertop_sub ">
                <img className='w-[400px]' src={Foto} alt="" />
            </div>
        </div>
    )
}