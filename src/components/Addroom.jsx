import axios from 'axios'
import React, { useState, useTransition } from 'react'
import Navbar from './Navbar'
import AdminNavBar from './AdminNavBar'

const Addroom = () => {
    // const [token, setToken] = useState(sessionStorage.getItem("token"))
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");


    const [input, setInput] = useState(
        { "roomnumber": "", "type": "", "availability": "", "amenities": "", "description": "", "profile": "", "price": "" }
    )

    const InputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        console.log("token",token)
        axios.post("http://localhost:3035/addroom", input, {
            headers: { 'token': localStorage.getItem("token"), "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("room Created Successfully")
                } else {
                    alert("room adding Failed")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <AdminNavBar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Room number</label>
                                <input type="text" className="form-control" name="roomnumber" value={input.roomnumber} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Type</label>
                                <input type="text" className="form-control" name="type" value={input.type} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Availability</label>
                                <input type="text" className="form-control" name="availability" value={input.availability} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Amenities</label>
                                <input type="text" className="form-control" name="amenities" value={input.amenities} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" name="description" value={input.description} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Image</label>
                                <input type="file" name="profile" id="" value={input.profile} className="form-control" onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="Number" className="form-control" name="price" value={input.price} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue} >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addroom