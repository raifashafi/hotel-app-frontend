import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const ViewUser = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:3035/ViewUser", data).then(
            (response) => {
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }

    const deleteUser = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:3035/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Deleted Successfully")
                }
                else {
                    alert("Failed")
                }
            }
        ).catch().finally()
    }

    useEffect(() => { fetchData() }, [])
  return (
    <div>
        <div className="container">
                <AdminNavBar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Pincode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.email}</td>
                                            <td>{value.age}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.address}</td>
                                            <td>{value.pincode}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => { deleteUser(value._id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewUser