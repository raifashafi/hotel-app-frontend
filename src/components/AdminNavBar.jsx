import React from 'react'
import { useNavigate } from 'react-router-dom'
// import './AdminNavbar.css'; 
import sign1 from '../uploads/0c86e7a0-aa0a-11ed-9c83-0210609a3fe2.jpeg';


const AdminNavBar = () => {
    const navigate = useNavigate()
    const Logout = () => {
        sessionStorage.clear()
        navigate("/")
    }
    return (
        
            <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundImage: `url(${sign1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                    
                }}> 
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Admin Dashboard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/addroom">Add Room</a>
                            <a class="nav-link" href="/viewuser">View User</a>
                            <a class="nav-link" href="/viewroom">View rooms</a>
                            <a class="nav-link" href="/viewFeedback">View  Feedback</a>
                            
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button onClick={Logout} className="btn btn-success">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavBar