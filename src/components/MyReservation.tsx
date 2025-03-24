"use client"
import { useRouter } from "next/router";

export default function MyReservation() {
    return (
        <div>
            <div className="mt-[80px] text-center">
                My Reservation
            </div>
            <a href="/api/auth/signout" className="all-[unset] box-border justify-center px-6 py-3.5 relative flex-[0_0_auto] border border-solid border-black hover:border-neutral-500 inline-flex items-center gap-2 rounded-lg shadow-[0px_1px_2px_#0000000d]">
              <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
              sign-out
                </div>
            </a>
        </div>
    )
}