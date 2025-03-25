export interface ReservationItem{
    date: string
    returnDate: string
    user: string
    carprovider: string
}

export interface CarItem{
    name: string
    description: string
    picture: string
    address: string
    district: string
    province: string
    tel: string
    booking: ReservationItem[]
    id: string
}

export interface CarJson{
    count: number,
    data: CarItem[]
}