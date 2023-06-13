import React from "react";
import "./Whoweare.css";
import side from "../Static/side.jpeg";
import rectangle1 from "../Static/Rectangle 1.png";

const Whoweare = () => {
  return (
    <div className="wwa-main-continer">
      <div className="image-and-content">
        <div className="wwa-content-container">
          <div className="wwa-whoweare">
            
            <div className="wwa-headding">Who</div>
            <div className="wwa-headding">we</div>
            <div className="wwa-headding">are.</div>
          </div>
          <div className="wwa-content">
            Write engaging and polished content that excites your customers with
            the right tone. Ideal for writing and proofreading resumes, emails,
            articles, blogs, and much more. Over 500K websites & apps.
            AI-writing assistant. Over 30M users worldwide.
          </div>
        </div>
        {/* <div className='www-image'>
          <div className='rec1'>
        <img className='rectangle1' src={rectangle1} alt='wwa'/>
        </div>
        <div className='rec2'>
        <img className='rectangle2' src={rectangle2} alt='wwa'/>
        </div>
        </div> */}
        <div className="image-container">
          <img className="info" src={side} alt="info" />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
