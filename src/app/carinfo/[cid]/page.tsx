import Image from "next/image"
import getCarprovider from "@/libs/getCarprovider"
import { cardActionAreaClasses } from "@mui/material"
import Link from "next/link"
export default async function CarproviderDetailPage({params} : {params:{cid:string}}){
    
    const carproviderDetail = await getCarprovider(params.cid)

    return(
        <main className="mt-24 text-center p-5 text-gray-200">
            <h1 className="text-xl font-semibold text-gray-100">{carproviderDetail.data.name}</h1>
            <div className="flex flex-row my-5 bg-slate-900 p-5 rounded-lg shadow-lg">
                <Image 
                    src={carproviderDetail.data.picture} 
                    alt='Car Image' 
                    width={0} 
                    height={0} 
                    sizes='100vw' 
                    className="rounded-lg w-[30%] border border-gray-700" 
                />
                <div className="text-md mx-5 text-left text-gray-300">
                    <p className="mb-3">{carproviderDetail.data.description}</p>
                    <p className="mb-1 text-gray-400"><span className="font-medium text-gray-200">Address:</span> {carproviderDetail.data.address}</p>
                    <p className="mb-1 text-gray-400"><span className="font-medium text-gray-200">District:</span> {carproviderDetail.data.district}</p>
                    <p className="mb-1 text-gray-400"><span className="font-medium text-gray-200">Province:</span> {carproviderDetail.data.province}</p>
                    <p className="mb-3 text-gray-400"><span className="font-medium text-gray-200">Telephone:</span> {carproviderDetail.data.tel}</p>
                    
                    <Link href={`/reserve?id=${params.cid}&name=${carproviderDetail.data.name}`}>
                        <button className="block rounded-md bg-gray-700 hover:bg-gray-600 px-4 py-2 text-white shadow-md transition-all">
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