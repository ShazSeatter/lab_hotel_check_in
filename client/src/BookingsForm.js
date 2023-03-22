import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {

    const [isAlertVisable, setIsAlertVisible] = useState(false)
    const [isChecked, setIsChecked] = useState(true)

    const [formData, setFormData] = useState({})


    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;  // Creates key value pairs or if the key exists changing the value and adding them to Form data object.
        setFormData(formData);
        setIsChecked(!isChecked)
        console.log(formData)
    }


    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);

        // Show success message
        setIsAlertVisible(true)
        // Stop showing the success message after 3 seconds
        setTimeout(() => {
                setIsAlertVisible(false);
                }, 3000);
        })
        e.target.reset()
        setFormData({})
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form">
            <h2>Add a hotel booking:</h2> 
            <div className="formWrap">
                <label htmlFor="name">Customer Name:</label>
                <input onChange={onChange} type = "text" id="name" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email Address:</label>
                <input onChange={onChange} type = "email" id="email" required />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Check-in Date:</label>
                <input onChange={onChange} type = "date" id="date" required/>
            </div>
            {/* <div className="formWrap">
                <p>Checked in?:</p>
                <label htmlFor="checked">Yes</label>
                <input onChange={onChange} type = "checkbox" id="checked" value={isChecked}/>
            </div> */}

            <input type="submit" value="Save" id="save"/>

            {isAlertVisable ? <i>Booking Saved</i> : null}

        </form>
    )
}

export default BookingsForm;