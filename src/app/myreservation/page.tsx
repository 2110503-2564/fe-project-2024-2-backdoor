'use client'
import { useEffect, useState } from "react";
import { ReservationItem } from "@/interfaces";
import { useSession } from "next-auth/react";
import getReservations from "@/libs/getReservations";
import deleteReservations from "@/libs/deleteReservation";
import Link from "next/link";

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
        <div className="bg-slate-950 min-h-screen mt-20">
        <main className="max-w-6xl mx-auto px-4 py-8">
            {
                session?.user.role == "admin"? 
                <h1 className="text-3xl font-bold text-center mb-6 font-serif">All Reservations</h1>:
                <h1 className="text-3xl font-bold text-center mb-6 font-serif">My Reservations</h1>
            }

            {reservations.length === 0 ? (
                <p className="text-center text-gray-400 font-serif">No reservations found.</p>
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
                            <Link href={`/edit?id=${reservation._id}`}>
                                <button>
                                    <div className="ml-[200px] border-solid border mt-[10px] mr-[10px] rounded-md text-black px-[5px] py-[3px] hover:border-black">
                                      Edit
                                    </div>
                                </button>
                            </Link>
                            
                            <button onClick={(e)=>{
                                // alert("delete reservation")
                                e.stopPropagation;
                                if(token){
                                    deleteReservations(reservation._id, token);
                                }
                            }}>
                                <div className="bg-red-500 mt-[10px] rounded-md px-[5px] py-[3px] hover:bg-red-700">
                                    Delete
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
        </div>
    );
}
