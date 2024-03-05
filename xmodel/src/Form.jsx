import React, { useState } from 'react'

const Form = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [dobError, setDobError] = useState('');

    const openModal = ()=>{
        setIsOpen(true)
    }

    const closeModal = ()=>{
        let hasError = false;

        if (!username) {
            setUsernameError('Please fill out this field.');
            hasError = true;
        } else {
            setUsernameError('');
        }

        if (!email) {
            setEmailError('Please fill out this field.');
            hasError = true;
        }
        else if(!email.includes('@')){
            setEmailError('Invalid email. Please check your email address.')
            hasError = true;
        } else {
            setEmailError('');
        }

        if (!phone) {
            setPhoneError('Please fill out this field.');
            hasError = true;
        }
        else if(phone.length !== 10 || isNaN(phone)){
            alert("Invalid phone number. Please enter a 10-digit phone number.")
            hasError = true;
        } else {
            setPhoneError('');
        }

        if (!dob) {
            setDobError('Please fill out this field.');
            hasError = true;
        }
        else if(new Date(dob) > new Date()){
            alert("Invalid date of birth. Date of birth cannot be in the future.")
            hasError = true;
        } else {
            setDobError('');
        }

        if (!hasError) {
            setIsOpen(false);
        }
    }

  return (
    <div>
        <h1>User Details Modal</h1>
        <button onClick={openModal}>Open Form</button>
        {isOpen && (
            <div className='modal'>
                <div className='modal-content'>
                    <h1>Fill Details</h1><br/>
                    <label>Username:</label><br/>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
                    <p>{usernameError}</p>
                    <label>Email Address:</label><br/>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                    <p>{emailError}</p>
                    <label>Phone Number:</label><br/>
                    <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
                    <p>{phoneError}</p>
                    <label>Date Of Birth:</label><br/>
                    <input type='date' value={dob} onChange={(e)=>setDob(e.target.value)}/><br/>
                    <p>{dobError}</p>
                    <button onClick={closeModal}>Submit</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Form