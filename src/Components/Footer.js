import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footeer-container" id="contact">
      <div className="footer">
        <div className="footer-left">
          <div className="address">
            <FaHome size={20} style={{ color: "#fff" }} />
            &nbsp;&nbsp; 1/8,1st stage,1st cross, Next to Chaitanya Hotel,KK
            Computers Building, Shri Krishna Temple Rd, Bengaluru, Karnataka
            560038
          </div>
          <div className="mail">
            <FaMailBulk size={20} style={{ color: "#fff" }} />
            &nbsp;&nbsp; info@cyber-wiz@gmail.com
          </div>
          <div className="phone">
            <FaPhoneSquareAlt size={20} style={{ color: "#fff" }} />
            &nbsp;&nbsp; 8943628965
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-content">
            <h4 className="aboutus">About us</h4>
            <p className="aboutcompany">
              What is an IT company? An IT (information technology) company
              oversees the use of devices storing, retrieving, and sending
              information.
            </p>
          </div>
          <div className="socialmeadia">
            <div className="fb">
              <FaFacebookF size={20} style={{ color: "#fff" }} />
            </div>
            <div className="insta">
              <FaInstagram size={20} style={{ color: "#fff" }} />
            </div>
            <div className="linkedin">
              <FaLinkedinIn size={20} style={{ color: "#fff" }} />
            </div>
            <div className="twiter">
              <FaTwitter size={20} style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
