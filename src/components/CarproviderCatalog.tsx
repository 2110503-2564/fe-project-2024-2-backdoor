import Link from "next/link";
import CarCard from "@/components/CarCard"

export default async function CarCatalog({carproviderJson} : {carproviderJson : Object}){
    const carproviderJsonReady = await carproviderJson
    return(
        <>
        Explore {carproviderJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    carproviderJsonReady.data.map((carItem : Object)=>(
                        <Link href={`/carinfo/${carItem.id}`} className="w-1/5">
                            <CarCard name={carItem.name} desc={carItem.description} imgSrc={carItem.picture}/>
                        </Link>
                    ))
                }

            </div>
        </>
    )
}