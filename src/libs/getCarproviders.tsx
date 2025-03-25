import { CarJson } from "@/interfaces"

export default async function getCarproviders():Promise<CarJson> {

    // await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch("https://cedt-frontend-project-api.vercel.app/api/v1/Carproviders")

    if(!response.ok){
        throw new Error("Failed to fetch cars")
    }

    return await response.json()
}