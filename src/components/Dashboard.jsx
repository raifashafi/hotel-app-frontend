import React from 'react';
import './Dashboard.css'; // Import CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar';
import image1 from '../uploads/hotel1.jpg';
import room1 from '../uploads/pexels-vinod-c-1862669-5860693.jpg';
import room2 from '../uploads/pexels-heyho-7031731.jpg';
import room3 from '../uploads/0c86e7a0-aa0a-11ed-9c83-0210609a3fe2.jpeg';

const Dashboard = () => {
  return (
    <div className="frontpage-container">
      <Navbar />
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Room 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxury Suite</h5>
              <p>Experience the best comfort and luxury.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src= {room2}   className="d-block w-100" alt="Room 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Deluxe Room</h5>
              <p>Comfortable rooms at affordable prices.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={room1} className="d-block w-100" alt="Room 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Family Suite</h5>
              <p>Perfect for family getaways.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Rooms Section with Cards */}
      <div className="room-cards-section">
        <h2 className="section-title">Our Rooms</h2>
        <div className="card-deck">
          <div className="card room-card">
            <img src={room1} className="card-img-top" alt="Luxury Room" />
            <div className="card-body">
              <h5 className="card-title">Luxury Suite</h5>
              <p className="card-text">An exquisite stay experience with premium amenities.</p>
            </div>
          </div>
          <div className="card room-card">
            <img src={room2} className="card-img-top" alt="Deluxe Room" />
            <div className="card-body">
              <h5 className="card-title">Deluxe Room</h5>
              <p className="card-text">A cozy and affordable room perfect for couples.</p>
            </div>
          </div>
          <div className="card room-card">
            <img src={room3} className="card-img-top" alt="Family Suite" />
            <div className="card-body">
              <h5 className="card-title">Family Suite</h5>
              <p className="card-text">Spacious room designed for families to enjoy a relaxing stay.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <h2 className="section-title">About Us</h2>
        <p>Welcome to EliteStays, where comfort meets luxury. Our hotel offers a variety of room options to suit every traveler, from solo adventurers to families. Experience top-notch amenities and customer service, ensuring a stay you'll never forget.</p>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <h2 className="section-title">Contact Us</h2>
        <p>For any inquiries or to book your stay, reach out to us:</p>
        <ul>
          <li>Email: contact@elitestays.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Hotel St., Luxury City, CA</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
