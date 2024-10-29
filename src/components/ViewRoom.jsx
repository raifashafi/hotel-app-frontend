import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';  // Assuming you have a Navbar component
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import UserNavbar from './UserNavbar';

const ViewRoom = () => {
    const [token] = useState(localStorage.getItem("token"));
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // Initialize useNavigate

    // Function to fetch room data from the server
    const fetchData = () => {
        axios.post("http://localhost:3035/viewallroom", {}, {
            headers: { "token": token, "Content-Type": "application/json" }
        })
        .then((response) => {
            console.log(response.data)
            setData(response.data);
            setError(null); // Clear any previous error
        })
        .catch((error) => {
            console.error("Error fetching room data:", error);
            setError("Unable to load room data. Please try again later.");
        });
    };

    

    // Fetch data on component mount
    useEffect(() => { fetchData(); }, []);

    // Function to handle room selection and navigate to the package selection page
    const handleRoomSelect = (room) => {
        navigate(`/package-selection?roomNumber=${room.roomnumber}&price=${room.price}&type=${room.type}`,{ state: { room } });
    };

    return (
        <div>
            {/* <Navbar /> */}
            <UserNavbar/>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Available Rooms</h2>
                
                {error && (
                    <div className="alert alert-danger text-center" role="alert">
                        {error}
                    </div>
                )}
                
                <div className="row g-4">
                    {data.length > 0 ? data.map((room, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={room.profile}
                                    alt={`Room ${room.roomnumber}`}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Room {room.roomnumber}</h5>
                                    <p className="card-text"><strong>Type:</strong> {room.type}</p>
                                    <p className="card-text"><strong>Availability:</strong> {room.availability}</p>
                                    <p className="card-text"><strong>Amenities:</strong> {room.amenities}</p>
                                    <p className="card-text"><strong>Description:</strong> {room.description}</p>
                                    <p className="card-text"><strong>Price:</strong> {room.price}</p>
                                    <button
                                        className="btn btn-primary mt-2"
                                        onClick={() => handleRoomSelect(room)}  // Navigate on click
                                    >
                                        Select Room and Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        !error && (
                            <div className="text-center">
                                <p>No rooms available at the moment.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewRoom;
