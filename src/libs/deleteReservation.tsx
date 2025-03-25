export default async function deleteReservations(id:string, token:string) {
    try {
        const response = await fetch(`https://cedt-frontend-project-api.vercel.app/api/v1/bookings/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to delete reservations: ${data.message || "Unknown error"}`);
        }

        return data.data;
    } catch (error) {
        console.error("Error during delete reservations:", error);
    }
}