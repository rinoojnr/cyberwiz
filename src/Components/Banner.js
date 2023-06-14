import React from "react";
import "./Banner.css";
import ban from "../Static/cover.jpg";
import { Link } from "react-router-dom";
import viedo from "../Static/cover1.mp4";
import b from '../Static/b.mp4'
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="banner" id="Home">
      <div className="mask">
        {/* <video className='intro-image' autoPlay loop muted>
        <source src={viedo} type='video/mp4' />
        </video>
         <video className='intro-image' autoPlay loop muted>
        <source src={b} type='video/mp4' />
        </video> */}
      

        <img className="intro-image" src={ban} alt="intro" /> 
        <div className="content">
          <p>Hi Iam Rinooj</p>
          <h1>Cyber-Wiz</h1>
          <div>
            <Link to="/contact" className="btn">
              Who we are
            </Link>
            <HashLink  to="#getintouch" className="btn-light">
              Get In Touch
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
