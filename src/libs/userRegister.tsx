export default async function userRegister (userName:string, userTel:string, userEmail:string, userPassword:string, userRole:string) {
    const response = await fetch("https://cedt-frontend-project-api.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            phonenum: userTel,
            email: userEmail,
            password: userPassword,
            role: userRole

        })
    })

    if(!response.ok) {
        throw new Error("Failed to Register");
    }
    return await response.json();
}