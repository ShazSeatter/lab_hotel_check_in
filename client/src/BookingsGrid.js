import BookingCard from "./BookingCard"

const BookingsGrid = ({bookings, removeBooking}) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })

    return (
        <>
        {bookingsList}
        </>
    )
}

export default BookingsGrid;