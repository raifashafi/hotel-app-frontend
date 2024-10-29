import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract totalAmount from location state
    const { totalAmount } = location.state || { totalAmount: 0 };

    const [data, setData] = useState({
        cardnum: "",
        cvv: "",
        dob: "",
        name: "",
        price: totalAmount, // Set the price to the total amount from BillPage
    });

    const inputHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handlePayment = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Prepare payment data to be sent
        const paymentData = {
            cardnum: data.cardnum,
            cvv: data.cvv,
            dob: data.dob,
            name: data.name,
            price: data.price, // Use the price from the totalAmount
        };

        console.log(paymentData);

        // Sending payment data to the server
        axios.post("http://localhost:3035/payment", paymentData)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Payment Successful");
                    navigate('/'); // Redirect after successful payment
                } else {
                    alert("Payment Failed");
                }
            })
            .catch((error) => {
                console.error(error.message);
                alert("Error: " + error.message);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h2><center><b>Payment Portal</b></center></h2>
                        <div className="card">
                            <form className="row g-3" onSubmit={handlePayment}>
                                <div className="col-md-6">
                                    <label className="form-label">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardnum"
                                        className="form-control"
                                        value={data.cardnum}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        className="form-control"
                                        value={data.cvv}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Expiry Date (MM/YY)</label>
                                    <input
                                        type="text"
                                        name="dob"
                                        className="form-control"
                                        value={data.dob}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Name on Card</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={data.name}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Total Amount (Rupees)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="price"
                                        value={data.price} // This will show the totalAmount
                                        readOnly // Optional: make this read-only
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
