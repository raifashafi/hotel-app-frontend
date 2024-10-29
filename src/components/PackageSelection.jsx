import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PackageSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    // Extract room details from URL parameters
    const roomnumber = queryParams.get('roomnumber');
    const price = queryParams.get('price');
    const type = queryParams.get('type');

    // Define package options
    const packages = [
        { id: 1, name: 'Standard Package', meal_type: "1-tier meal", price: 350 },
        { id: 2, name: 'Deluxe Package', meal_type: "2-tier meal", workspace: "Available", price: 650 },
        { id: 3, name: 'Premium Package', meal_type: "2-tier meal", workspace: "Available", Storage: "Wardrobe availability", service: "In-room dining", minibar: "Available", price: 2100 },
    ];

    // Function to handle package selection
    const handlePackageSelect = (packageDetails) => {
        const room = location.state?.room; // Safely access room
        if (!room) {
            alert('No room selected! Please select a room first.');
            return; // Prevent further execution
        }

        navigate('/bill', { state: { room, packageDetails } });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Package Selection for Room {roomnumber}</h2>
            <div className="mb-3">
                <strong>Room Type:</strong> {type} <br />
                <strong>Room Price:</strong> {price}
            </div>

            <div className="row">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="col-12 col-md-4">
                        <div className="card mb-3 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{pkg.name}</h5>
                                <p className="card-text"><strong>Price:</strong> {pkg.price}</p>
                                <p className="card-text"><strong>Meal Type:</strong> {pkg.meal_type}</p>
                                {pkg.workspace && <p className="card-text"><strong>Workspace:</strong> {pkg.workspace}</p>}
                                {pkg.Storage && <p className="card-text"><strong>Storage:</strong> {pkg.Storage}</p>}
                                {pkg.service && <p className="card-text"><strong>Service:</strong> {pkg.service}</p>}
                                {pkg.minibar && <p className="card-text"><strong>Minibar:</strong> {pkg.minibar}</p>}

                                <button
                                    className="btn btn-primary"
                                    onClick={() => handlePackageSelect(pkg)}  // Handle package selection
                                >
                                    Select {pkg.name}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackageSelection;
