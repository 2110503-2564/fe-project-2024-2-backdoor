export default function CarCard({name, desc, imgSrc} : {name:string, desc:string, imgSrc:string}) {
    return (
        <div className=" bg-white rounded-[10px] w-[425px]">
          <div className="flex flex-col w-[394px] h-[359px] items-start gap-6 relative top-[17px] left-4">
            <div className="relative flex-1 self-stretch w-full grow rounded-lg overflow-hidden bg-[url(/image.svg)] bg-cover bg-[50%_50%]">
              <img
                className="absolute w-[394px] h-[265px] top-0 left-0 object-cover"
                alt="Black audi a series"
                src={imgSrc}
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-9">
                {name}
              </div>

              <div className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px]">
                {desc}
              </div>
            </div>
          </div>
        </div>
    )
}