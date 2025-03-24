import Image from "next/image"
import getCarprovider from "@/libs/getCarprovider"
import { cardActionAreaClasses } from "@mui/material"
import Link from "next/link"
export default async function CarproviderDetailPage({params} : {params:{cid:string}}){
    
    const carproviderDetail = await getCarprovider(params.cid)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium"> {carproviderDetail.data.name} </h1>
            <div className="flex flex-row my-5">
                <Image src={carproviderDetail.data.picture} alt='Car Image' 
                width={0} height={0} sizes='100vw' className="rouded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{carproviderDetail.data.description}
                <div className="text-md mx-5 ">Address: {carproviderDetail.data.address}</div>
                <div className="text-md mx-5 ">District: {carproviderDetail.data.district}</div>
                <div className="text-md mx-5 ">Province {carproviderDetail.data.province}</div>
                <div className="text-md mx-5 ">Telephone: {carproviderDetail.data.tel}</div>
                
                
                <Link href={`/reservations?id=${params.cid}&model=${carproviderDetail.data.model}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                    text-white shadow-sm"> 
                        Make Reservation
                    </button>
                </Link>
                
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams(){
//     return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
// }