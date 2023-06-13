import React, { useState } from "react";
import "./Getintouch.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import get from "../Static/get.jpg";

const Getintouch = () => {
  const handleForm = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  console.log(values);
  return (
    <div className="top-container" id="getintouch">
      <div className="navbar"></div>
      <div className="formandconent">
        <div className="content-container">
          <h3 className="headding">Touch The Sky Of</h3>
          <h3 className="headding1"> Infinity With Us</h3>
        </div>

        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>GET IN TOUCH</span>
                  </div>
                  <div className="app-contact">
                    <span>
                      {" "}
                      1/8,1st stage,1st cross, Next to Chaitanya Hotel,KK
                      Computers Building, Shri Krishna Temple Rd, Bengaluru,
                      Karnataka 560038
                      <br />
                    </span>
                    <span>
                      <br /> info@cyber-wiz@gmail.com
                    </span>
                    <br />
                    <br />
                    <span> 8943628965</span>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        onChange={handleForm}
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control-email"
                        placeholder="EMAIL"
                        onChange={handleForm}
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="CONTACT NO"
                        onChange={handleForm}
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        placeholder="MESSAGE"
                        onChange={handleForm}
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button type="submit" className="app-form-button-cancel">
                        CANCEL
                      </button>
                      <button
                        type="cancel"
                        className="app-form-button-send"
                        onClick={formSubmit}
                      >
                        SEND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
