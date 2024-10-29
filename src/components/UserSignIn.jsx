import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
// import './UserSignIn.css'
 import sign from '../uploads/1.jpg';



const UserSignIn = () => {
    const navigate = useNavigate()

    const [data,changeData]=useState(
        {"email":"","password":""}
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value })
    }


    const readValue = () => {
        console.log(data)
        if(!data.email || !data.password){
            alert("Please fill in both email and password")
            return;
        }
        if(data.email ==="admin@gmail.com" && data.password === "admin123"){
            alert("Admin Login successful")
            navigate("/adminnavbar")
            return;
        }
        axios.post("http://localhost:3035/UserSignin",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status==="Incorrect Password") {
                    alert("Incorrect Password")
                } else if (response.data.status==="Incorrect Email-id") {
                    alert("Invalid Email-id")
                }
                else {
                    let token = response.data.token
                    let userId = response.data.userId

                    console.log(token)
                    console.log(userId)
                    localStorage.setItem("userId", userId)
                    localStorage.setItem("token", token)

                    navigate("/usernavbar")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    return (
        <div>
            <Navbar/>
             <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundImage: `url(${sign})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}> 
                <div className="row" id='signin'>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email-id</label>
                                <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Sign In</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <Link to="/signup" className="btn btn-success">New User</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default UserSignIn