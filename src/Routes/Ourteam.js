import React from "react";
import "./Ourteam.css";
import profile1 from "../Static/profie.jpg";
import licon from "../Static/linkedin-icon.png";

const Ourteam = () => {
  return (
    <div className="our-team-container" id="ourteam">
      <div className="meet-our-team-and-dec">
        <div className="meet-our-team-container">
          <div className="motc-content1">Meet the</div>
          <div className="motc-content2">Team</div>
           
          <div className="motc-content3">
            Find Who We stock images in HD and millions of other royalty-free
            stock photos, illustrations and vectors in  Shutterstock
            collection.
          </div>
        </div>
        <hr className="new5"></hr> 
      </div>
      <div className="meet-our-team-profile-container">
        <div className="profile">
          <div className="profile1-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>
            <div className="img-name">Albert</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile2-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>
            <div className="img-name">Alexander</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="profile3-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>
            <div className="img-name">Albert</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="profile">
          <div className="profile1-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>

            <div className="img-name">Alba</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile2-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>

            <div className="img-name">Albey</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="profile3-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>

            <div className="img-name">Arnold</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className='profile'>
        <div className="profile3-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>

            <div className="img-name">Arnold</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div> 
          <div className="profile3-container">
            <div className="img">
              <img src={profile1} className="profilepic" alt="profile" />
            </div>
            <div className="img-name">Albert</div>
            <div className="l-icon-and-position">
              <div className="img-position">Founder</div>
              <div className="linked-in-icon">
                <a href="https://www.w3schools.com">
                  <img src={licon} className="licon" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div>
                    </div>
      </div>
    </div>
  );
};

export default Ourteam;
