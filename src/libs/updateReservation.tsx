export default async function updateReservations(id:string, token:string, date:string, returnDate:string) {
    try {
        const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                date: date,
                returnDate: returnDate
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(`Failed to update reservations: ${data.message || "Unknown error"}`);
        }
        
        return data;
    } catch (error) {
        console.error("Error during update reservations:", error);
    }
}