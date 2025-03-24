"use client"

export default function Banner():JSX.Element {
    return (
      <div className="w-[1442px] h-[720px]">
        <div className="fixed w-[1442px] h-[720px] top-0 left-0">
          <div className="relative h-[720px]">
            <div className="absolute w-[1442px] h-[720px] top-0 left-0 bg-[url(/header-with-image.svg)] bg-cover bg-[50%_50%]">
              <div className="relative w-[1440px] h-[719px] top-px left-0.5 bg-[url(/pexels-albinberlin-919073-1.png)] bg-cover bg-[50%_50%]">
                <button className="all-[unset] box-border px-8 py-5 absolute top-[472px] left-[643px] bg-[#997e7e7a] inline-flex items-center gap-2 rounded-lg shadow-[0px_1px_2px_#0000000d]" onClick={()=>alert("reserve clicked")}>
                  <div className="mt-[-1.00px] text-2xl leading-9 relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white tracking-[0] whitespace-nowrap">
                    reserve
                  </div>
                </button>
  
                <div className="flex flex-col w-[844px] items-center gap-10 absolute top-[283px] left-[297px]">
                  <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Inria_Serif-Bold',Helvetica] font-bold text-white text-[64px] text-center tracking-[-1.28px] leading-[89.6px]">
                      BACKDOOR
                    </div>
  
                    <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[33.6px]">
                      start your journey with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="absolute w-[1440px] h-[164px] top-0 left-0.5">
              <div className="inline-flex items-center justify-end gap-12 absolute top-14 left-[1143px]">
                <div className="text-xl leading-[30px] relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white tracking-[0] whitespace-nowrap">
                  home
                </div>
  
                <button className="all-[unset] box-border justify-center px-6 py-3.5 relative flex-[0_0_auto] border-2 border-solid border-black inline-flex items-center gap-2 rounded-lg shadow-[0px_1px_2px_#0000000d]">
                  <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                    sign-in
                  </div>
                </button>
              </div>
  
              <div className="absolute h-[30px] top-[66px] left-20 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                car info
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };