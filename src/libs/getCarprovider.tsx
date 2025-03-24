export default async function getCarprovider(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/Carproviders/${id}`)

    if(!response.ok){
        throw new Error("Failed to fetch car")
    }

    return await response.json()
}