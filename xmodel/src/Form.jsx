import React, { useState, useEffect } from 'react';

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.modal-content')) {
                setIsOpen(false);
                setUsername('');
                setEmail('');
                setPhone('');
                setDob('');
                setErrors({
                    username: '',
                    email: '',
                    phone: '',
                    dob: ''
                });
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setUsername('');
        setEmail('');
        setPhone('');
        setDob('');
        setErrors({
            username: '',
            email: '',
            phone: '',
            dob: ''
        });
    };

    return (
        <div>
            <h1>User Details Modal</h1>
            <button onClick={openModal}>Open Form</button>
            {isOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h1>Fill Details</h1>
                        <br />
                        <label>Username:</label><br />
                        <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                        <p>{errors.username}</p>
                        <label>Email Address:</label><br />
                        <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <p>{errors.email}</p>
                        <label>Phone Number:</label><br />
                        <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                        <p>{errors.phone}</p>
                        <label>Date Of Birth:</label><br />
                        <input type='date' id='dob' value={dob} onChange={(e) => setDob(e.target.value)} /><br />
                        <p>{errors.dob}</p>
                        <button className='submit-button' onClick={closeModal}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
