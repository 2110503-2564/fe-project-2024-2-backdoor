import { Suspense } from "react";
import CarproviderCatalog from "@/components/CarproviderCatalog";
import getCarproviders from "@/libs/getCarproviders";
import { LinearProgress } from "@mui/material";

export default function CarInfoPage() {
    const carProviders = getCarproviders()
    return (
      <main>
        {/* <div className="absolute w-[389px] h-[72px] top-[140px] left-[60px] font-serif text-black text-[64px] tracking-[0] leading-[96px] whitespace-nowrap">
          select a carprovider
        </div> */}
        
        <Suspense fallback={ <p>Loading ...<LinearProgress/></p> }>
              <CarproviderCatalog carproviderJson={carProviders}/>   
        </Suspense>
      </main>

        // <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
        //   <div className="bg-[#f0f0f0] overflow-hidden w-[1528px] h-[1024px] relative">

        //     <div className="flex flex-row h-[400px] mt-[300px] justify-around">
        //         <CarCard name="Maserati Grancabrio" desc="in dark grey color" imgSrc="/img/maserati.jpg"></CarCard>
        //         <CarCard name="Audi A-series" desc="in black color" imgSrc="/img/blackAudiASeries1.jpg"></CarCard>
        //         <CarCard name="Audi A5 Sportback" desc="sedan in blue color" imgSrc="/img/audisedan.jpg"></CarCard>
        //     </div>
    
    
        //     <div className="absolute w-[389px] h-[72px] top-[140px] left-[60px] font-serif text-black text-[64px] tracking-[0] leading-[96px] whitespace-nowrap">
        //       select a carprovider
        //     </div>
    
        //     <TopMenu></TopMenu>
        //   </div>
        // </div>
        
      );
}