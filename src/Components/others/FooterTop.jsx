export default function FooterTop(){
    return(
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
                <input class="w-[262px] mr-[20px] h-[44px] px-[14px] py-[10px] border border-[#d5d7da] rounded-[8px] shadow-md shadow-[rgba(10,13,18,0.05)] bg-white font-[var(--font-family)] font-normal text-[16px] leading-[150%] text-[#717680] focus:outline-none" placeholder="Pochtangizni kiriting" />

                <button class="w-[122px] h-[44px] px-[16px] py-[10px] rounded-[8px] bg-[#444ce7] text-white font-[var(--font-family)] font-semibold text-[15px] leading-[150%] shadow-md shadow-[rgba(16,24,40,0.05)] border border-[rgba(10,13,18,0.18)] border-b-[rgba(10,13,18,0.05)] focus:outline-none hover:bg-[#3b42d6] active:bg-[#373dc4]">
                A’zo bo’lish
               </button>

            </div>
        </div>
    )
}