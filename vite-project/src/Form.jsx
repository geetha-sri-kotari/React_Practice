import React from "react";

const Form = () => {
    let name_value = "";
    let email_value = "";
    let dob_value = "";
    const getName = (name_event) => {
          name_value = name_event.target.value;
          //console.log(name_value)
          //console.log(event.nativeEvent.data);
    }
    const getEmail = (email_event) => {
        email_value = email_event.target.value;
        //console.log(email_value)
    }
    const getDob = (dob_event) => {
        dob_value = dob_event.target.value;
       // console.log(dob_event.nativeEvent);
    }
    const printDetails = () => {
        console.log("Name you entered : ", name_value);
        console.log("Email you entered : ", email_value);
        console.log("DOB you entered : ", dob_value);
    }

    return (
        <>
        <label>Name</label>
        <input type="text" className="name" onChange={(name_event) => getName(name_event)}/>
        <br />
        <label>Email</label>
        <input type="text" className="email" onChange={(email_event) => getEmail(email_event)}/>
        <label>Date Of Birth</label>
        <input type="date" className="dateOfBirth" onChange={(dob_event) => getDob(dob_event)}/>
        <button className="submit-btn" onClick={printDetails}>Submit</button>
        </>
    );
}
export default Form;