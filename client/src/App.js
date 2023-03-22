import React, {useState, useEffect}from  'react'; 
import './App.css';

import BookingsGrid from './BookingsGrid';
import BookingsForm from './BookingsForm';

import { getBookings } from './BookingService';

function App() {

  const [hotelBookings, setHotelBookings] = useState([]);
  
  useEffect(()=>{
    getBookings().then((allBookings)=>{
      setHotelBookings(allBookings);
    })
  }, []);
  
  const addBooking = (booking) =>{
    const temp = hotelBookings.map(s =>s); // same as = [... hotelBookings]
    temp.push(booking);
    setHotelBookings(temp);
  }

  const removeBooking = (id) => {
    const temp = hotelBookings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id); // Require the Index position for a splice
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setHotelBookings(temp);
  }


  return (
    <div className="App">
      <BookingsForm addBooking={addBooking}/>
      <BookingsGrid bookings={hotelBookings} removeBooking={removeBooking}/>
    </div>
  );
}

export default App;
