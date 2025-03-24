export default async function getReservations(token:string) {
    try {
        const response = await fetch("http://localhost:5000/api/v1/bookings", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to fetch reservations: ${data.message || "Unknown error"}`);
        }

        return data.data;
    } catch (error) {
        console.error("Error during fetching reservations:", error);
    }
}