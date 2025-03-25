'use client'
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { ReservationItem } from "@/interfaces";
import makeReservation from "@/libs/makeReservation";

export default function Reserve(): JSX.Element {
    const urlParams = useSearchParams();
    const cid = urlParams.get('id');
    const name = urlParams.get('name');

    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [carproviderID, setCarproviderID] = useState<string | null>(cid);
    const [carprovidername, setCarproviderName] = useState<string | null>(name);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

    const { data: session } = useSession();
    const userId = session?.user?._id;

    // Log variables when they change
    // useEffect(() => {
    //     console.log("First Name:", fname);
    //     console.log("Last Name:", lname);
    //     console.log("Contact Number:", tel);
    //     console.log("Car Provider ID:", carproviderID);
    //     console.log("Car Provider Name:", carprovidername);
    //     console.log("Date:", date ? dayjs(date).format("YYYY/MM/DD") : null);
    //     console.log("Return Date:", returnDate ? dayjs(returnDate).format("YYYY/MM/DD") : null);
    //     console.log("User ID:", userId);
    // }, [fname, lname, tel, carproviderID, carprovidername, date, returnDate, userId]);

    const makeReserve = () => {
        if (name && date && returnDate && fname && lname && carprovidername && carproviderID) {
            console.log('Submitting reservation...');
            const item: ReservationItem = {
                date:  dayjs(date).toISOString(),
                returnDate: dayjs(returnDate).toISOString(),
                user: userId,
                carprovider: carproviderID
            };
            makeReservation(item.date, item.returnDate, item.user, item.carprovider, session?.user?.token);
            alert("reservation completed")
        }
    };

    return (
        <div className="bg-white flex justify-center w-full min-h-screen p-6">
            <div className="mt-24 bg-white w-full max-w-3xl p-6 shadow-lg rounded-lg border">
                <h1 className="text-4xl font-serif text-center mb-6">Reserve</h1>

                <div className="space-y-4">
                    {/* First Name */}
                    <TextField fullWidth label="First Name" variant="outlined" value={fname} onChange={(e) => setFname(e.target.value)} />

                    {/* Last Name */}
                    <TextField fullWidth label="Last Name" variant="outlined" value={lname} onChange={(e) => setLname(e.target.value)} />

                    {/* Contact Number */}
                    <TextField fullWidth label="Contact Number" variant="outlined" value={tel} onChange={(e) => setTel(e.target.value)} />

                    {/* Date & Return Date */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            value={date}
                            onChange={(newDate) => setDate(newDate)}
                        />
                        <DatePicker
                            label="Return Date"
                            value={returnDate}
                            onChange={(newNewDate) => setReturnDate(newNewDate)}
                        />
                    </LocalizationProvider>

                    {/* Select Car */}
                    <TextField fullWidth label="Select Car Provider" variant="outlined" value={carprovidername} />

                    {/* Submit Button */}
                    <Button fullWidth variant="contained" color="primary" size="large" onClick={makeReserve}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};
