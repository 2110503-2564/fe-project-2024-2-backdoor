export default async function getCarprovider(id:string) {
    const response = await fetch(`https://cedt-frontend-project-api.vercel.app/api/v1/Carproviders/${id}`)

    if(!response.ok){
        throw new Error("Failed to fetch car")
    }

    return await response.json()
}