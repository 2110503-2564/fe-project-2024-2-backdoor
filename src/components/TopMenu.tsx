"use client"
import { useRouter } from "next/navigation"

export default function TopMenu() {
    const router = useRouter();
    return (
        <div className="w-[1550px] h-[80px] top-0 bg-black fixed">
          <div className="inline-flex items-center justify-end gap-[var(--variable-collection-spacing-m)] relative top-3 left-[1320px]">
            <div className="relative w-fit font-body-text font-[number:var(--body-text-font-weight)] text-white">
              <button onClick={
                (e)=>{
                    e.stopPropagation;
                    router.push("/");
                }
              }>home</button>
            </div>

            <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3.5 relative flex-[0_0_auto] border-2 border-solid border-black shadow-button-shadow ml-[20px]" onClick={(e)=>{
                e.stopPropagation;
                router.push("/api/auth/signin")
            }}>
              <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-Medium',Helvetica] text-white tracking-[0] leading-[30px] whitespace-nowrap">
                sign-in
              </div>
            </button>

            <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3.5 relative flex-[0_0_auto] border-2 border-solid border-black shadow-button-shadow ml-[20px]" onClick={(e)=>{
                e.stopPropagation;
                router.push("/api/auth/register")
            }}>
              <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-Medium',Helvetica] text-white tracking-[0] leading-[30px] whitespace-nowrap">
                register
              </div>
            </button>

          </div>
        </div>
    )
}