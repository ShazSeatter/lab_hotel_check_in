import React, {useState} from 'react';
import { deleteBooking, updateBooking} from "./BookingService"

const BookingCard = ({booking, removeBooking}) => {


    // Toggles the update form being shown when the Edit or Update button is clicked
    const [updateClicked, setUpdateClicked] = useState(false)
    const handleUpdate = () => {
        setUpdateClicked(!updateClicked)
    }

    // Handles ONCHANGE
    const [name, setName] = useState(booking.name)
    const [email, setEmail] = useState(booking.email)
    const [date, setDate] = useState(booking.date)
    const [checked, setChecked] = useState(booking.checked)
    
  
    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleDateChange = event => setDate(event.target.value)
    const handleCheckedChange = () => setChecked(!checked)


    // FORM SUBMIT
    const handleSubmit= (e) => {
        e.preventDefault()
        const updatedBooking = {
            name, 
            email, 
            date,
            checked
        }
        console.log(updatedBooking)
        updateBooking(updatedBooking, booking._id)
        setUpdateClicked(!updateClicked)
    }


    // DELETE
    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }

    return (
        <>
               { updateClicked 
        ?
        <>
            <form onSubmit={handleSubmit} className="update-form">
                <h1>{name}</h1>
                <div className="formWrap">
                    <label htmlFor="name">Customer Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={handleNameChange} 
                        required
                    />
                </div>

                <div className="formWrap">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div className="formWrap">
                    <label htmlFor="date">date:</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date} 
                        onChange={handleDateChange} 
                        required
                    />
                </div>

                <div className="formWrap">
                    <label htmlFor="checked">Checked-in:</label>
                    <input 
                        type="checkbox"
                        id="checked"
                        checked={checked}
                        value={checked}
                        onChange={handleCheckedChange}
                    />
                </div>

                <input id="button" type="submit" value="Update Booking" />

            </form>
            <hr></hr>
         </>
        :
        <>
        <h1>{name}</h1>
        <p>Email: {email}</p>
        <p>Date: {date}</p>
        <p>Checked in: {checked ? "Yes" : "No"}</p>
        <button id="button" onClick={handleDelete} > 🗑 </button>
        <button id="button" onClick={handleUpdate}>Edit</button>
        <hr></hr>
        </>
        }
        </>

    )
}

export default BookingCard;