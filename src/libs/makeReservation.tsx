export default async function makeReservation (date:string, returnDate:string, userID:string, carproviderID:string, token:string) {
    // console.log(date);
    // console.log(returnDate);
    // console.log(userID);
    // console.log(carproviderID);
    // console.log(token);
    try {
        const response = await fetch(`https://cedt-frontend-project-api.vercel.app/api/v1/carproviders/${carproviderID}/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                date: date,
                returnDate: returnDate,
                user: userID,
                // date: "2026-01-08T16:04:18.000Z",
                // returnDate: "2025-05-05T05:10:52.000Z",
                // user: "67e1dff286a1b04721f7771b"
                // carprovider: carproviderID
            })
        })
    
        if(!response.ok) {
            throw new Error("Failed to make Reservation");
        }
        return await response.json();
    } catch (error) {
        console.log('Failed to make Reservation2');
    }
}