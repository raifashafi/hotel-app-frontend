import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../uploads/logo1.webp'

const UserNavbar = () => {
  const navigate = useNavigate()
  const Logout = () => {
    sessionStorage.clear()
    navigate("/")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="">
          <img src={logo1} alt="EliteStays Logo"  className="navbar-logo" />
           USER SIGN IN
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item active">
              <a className="nav-link" href="/signup">SIGNUP</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/signin">SIGNIN</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/viewroom">View Room</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="/feedback">feedback </a>
            </li> 
            
          </ul>
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

export default UserNavbar