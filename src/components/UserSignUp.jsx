import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sign3 from '../uploads/bad242e9b52134c7c4b49a881d697be5_t.jpeg';

const UserSignUp = () => {
    const [data, changeData] = useState(
        { "name": "", "phone": "", "email": "", "age": "", "gender": "", "address": "", "pincode": "", "password": "", "cfmpassword": "" }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        const minPasswordLength = 6;
        const maxPasswordLength = 12;
        const phoneLength = 10;
        const pincodeLength = 6;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple regex for email validation
        const nameRegex = /^[a-zA-Z\s]+$/;  // Name validation (only letters and spaces)


        if (!data.phone || data.phone.length !== phoneLength) {
            alert("Enter valid contact number")
            return;
        }

        if (!data.pincode || data.pincode.length !== pincodeLength) {
            alert("Enter valid pincode")
            return;
        }

        if (data.password.length < minPasswordLength || data.password.length > maxPasswordLength) {
            alert("Enter strong password with letters, alphabets and atleast one special character");
            return;
        }

        if (!data.email || !emailRegex.test(data.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!data.name || !nameRegex.test(data.name)) {
            alert("Name must only contain letters and cannot be empty.");
        return;
    }

        if (data.password == data.cfmpassword) {
            let newInput = { "name": data.name, "phone": data.phone, "email": data.email, "age": data.age, "gender": data.gender, "address": data.address, "pincode": data.pincode, "password": data.password, "cfmpassword": data.cfmpassword }

            axios.post("http://localhost:3035/UserSignup", newInput).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Registered Successfully")
                        changeData({ "name": "", "phone": "", "email": "", "age": "", "gender": "", "address": "", "pincode": "", "password": "", "cfmpassword": "" })
                    } else {
                        alert("Registration failed")
                        changeData({ "name": "", "phone": "", "email": "", "age": "", "gender": "", "address": "", "pincode": "", "password": "", "cfmpassword": "" })
                    }
                }
            ).catch(
                (error) => {
                    console.log(error.message)
                    alert(error.message)
                }
            ).finally()
        } else {
            alert("Password and Confirm password does not match")
        }
    }
    //adding css
    
    return (
        <div>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundImage: `url(${sign3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="row" id='signup'>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" style={{ color: 'white' }}>NAME</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" style={{ color: 'white' }}>PHONE NO</label>
                                <input type="number" className="form-control" name="phone" value={data.phone} minLength={10} maxLength={10} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>EMAIL-ID</label>
                                <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>AGE</label>
                                <input type="text" className="form-control" name="age" value={data.age} onChange={inputHandler} />
                               
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>GENDER</label>
                                <select name="gender" id="" className="form-control" value={data.gender} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>ADDRESS</label>
                                <textarea type="textarea" name="address" id="" className="form-control" minLength={10} maxLength={35} value={data.address} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>PINCODE</label>
                                <input type="number" className="form-control" name="pincode" minLength={6} maxLength={6} value={data.pincode} onChange={inputHandler} />
                            </div>
                        
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>PASSWORD</label>
                                <input type="password" name="password" id="" className="form-control" minLength={6} value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"style={{ color: 'white' }}>CONFIRM PASSWORD</label>
                                <input type="password" name="cfmpassword" id="" className="form-control" minLength={6} value={data.cfmpassword} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <Link to="/" className="btn btn-success">Joined User</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
    )
}

export default UserSignUp