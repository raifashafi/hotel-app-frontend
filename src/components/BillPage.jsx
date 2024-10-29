import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BillPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extracting data passed via the location state
    const { room, packageDetails } = location.state || { room: {}, packageDetails: {} };

    // Convert prices to numbers before adding
    const roomPrice = Number(room.price) || 0; // Convert room price to a number
    const packagePrice = Number(packageDetails.price) || 0; // Convert package price to a number

    const totalAmount = roomPrice + packagePrice; // Sum of both prices

    const handlePayment = () => {
        // Prepare bill data to be sent
        const billData = {
            room: {
                roomnumber: room.roomnumber, // Ensure this is a property of the room object
                type: room.type,
                price: roomPrice,
            },
            packageDetails: {
                name: packageDetails.name,
                price: packagePrice,
            },
            totalAmount: totalAmount,
        };

        // Logging values
        console.log('Bill Data:', billData);
        console.log('Token:', sessionStorage.getItem("token"));

        // Sending the bill data to the server
        axios.post('http://localhost:3035/bill', billData, {
            headers: {
                'token': sessionStorage.getItem("token"),
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response.data);
            if (response.data.status === "success") {
                alert("Bill Created Successfully");
                navigate('/'); // Redirect after successful save
            } else {
                alert("Failed to create bill");
            }
        }).catch(error => {
            console.log(error.message);
            alert("Error: " + error.message);
        });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Billing Information</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Room Details</h5>
                    <p><strong>Room Number:</strong> {room.roomnumber}</p>
                    <p><strong>Room Type:</strong> {room.type}</p>
                    <p><strong>Room Price:</strong> {roomPrice}</p>

                    <h5 className="card-title mt-3">Package Details</h5>
                    <p><strong>Package Name:</strong> {packageDetails.name}</p>
                    <p><strong>Package Price:</strong> {packagePrice}</p>

                    <h5 className="card-title mt-3">Total Amount:</h5>
                    <h4 className="text-success">{totalAmount}</h4>

                    <button className="btn btn-primary mt-4" onClick={handlePayment}>
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BillPage;
