export default async function getCarproviders() {

    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch("http://localhost:5000/api/v1/Carproviders")

    if(!response.ok){
        throw new Error("Failed to fetch cars")
    }

    return await response.json()
}