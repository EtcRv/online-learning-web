import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <div className="wrapperss">
    <div className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Welcome to our learning platform! We are dedicated to providing high-quality online courses that empower learners of all ages and backgrounds to achieve their goals. Our team of experienced educators is committed to creating engaging and interactive learning experiences that inspire curiosity and foster lifelong learning. With a diverse range of courses, from coding and design to business and language, we aim to help our students unlock their full potential and thrive in today's rapidly changing world. Thank you for choosing us as your learning partner.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <div>
              <p>1 Dai Co Viet, Hai Ba Trung, Ha Noi</p>
              <p>Phone number: 123-456-7890</p>
              
              <p>Email: info@example.com</p>
            
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-right">Copyright &copy; 2023</p>
          </div>
        </div>
      </div>
    </div></div>
    
  );
}

export default Footer;
