'use client'
import React, { useState } from "react";
import { Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import updateReservations from "@/libs/updateReservation";

export default function EditForm(): JSX.Element{
    const urlParams = useSearchParams();
    const reserveid = urlParams.get('id');

    const [date, setDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

    const { data: session } = useSession();

    const editReserve = () => {
        if (date && returnDate && reserveid && session?.user.token) {
            console.log('Editing reservation...');
            const item = {
                date: dayjs(date).toISOString(),
                returnDate: dayjs(returnDate).toISOString(),
            };
            console.log(item);
            updateReservations(reserveid, session?.user?.token ,item.date, item.returnDate);
            alert("editing reservation completed")
        }
    };

    return (
        <div className="bg-slate-950 flex justify-center w-full min-h-screen p-6">
            <div className="mt-24 bg-gray-900 w-full max-w-3xl p-6 shadow-lg rounded-lg border border-gray-700">
                <h1 className="text-4xl font-serif text-center mb-6 text-[#fab305]">Edit Date</h1>

                <div className="text-white">
                    <div className="flex items-center gap-[208px]">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date"
                                value={date}
                                onChange={(newDate) => setDate(newDate)}
                                className="bg-gray-200 text-white border border-gray-600 rounded-md p-1"
                            />
                            <DatePicker
                                label="Return Date"
                                value={returnDate}
                                onChange={(newNewDate) => setReturnDate(newNewDate)}
                                className="bg-gray-200 text-white border border-gray-600 rounded-md p-1"
                            />
                        </LocalizationProvider>
                    </div>

                    {/* Submit Button */}
                    <Button fullWidth variant="contained" className="bg-[#B8860B] text-white hover:bg-[#fab305] mt-[30px]" size="large" onClick={editReserve}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};