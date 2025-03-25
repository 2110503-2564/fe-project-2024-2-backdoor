'use client'
import { useEffect, useState } from "react";
import { ReservationItem } from "@/interfaces";
import { useSession } from "next-auth/react";
import getReservations from "@/libs/getReservations";

export default function MyReservationPage() {
    const [reservations, setReservations] = useState<ReservationItem[]>([]);
    const { data: session } = useSession();
    const token = session?.user?.token;
    
    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                try {
                    const data = await getReservations(token);
                    setReservations(data);
                } catch (error) {
                    console.error("Error fetching reservations:", error);
                }
            }
        };
        fetchData();
    }, [token]);

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">My Reservations</h1>

            {reservations.length === 0 ? (
                <p className="text-center text-gray-600">No reservations found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reservations.map((reservation) => (
                        <div key={reservation._id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Reservation ID: {reservation._id}</h2>
                            
                            {/* ✅ Extracting car provider details safely */}
                            <p className="text-gray-600">
                                <span className="font-medium">Car Provider:</span> {reservation.carprovider.name}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Address:</span> {reservation.carprovider.address}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Phone:</span> {reservation.carprovider.tel}
                            </p>

                            <p className="text-gray-600">
                                <span className="font-medium">User:</span> {reservation.user}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Date:</span> {new Date(reservation.date).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Return Date:</span> {new Date(reservation.returnDate).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
