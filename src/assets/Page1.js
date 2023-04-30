import React from "react";
import { Link } from "react-router-dom";
import fest1 from "../imgs/fest1.jpg";
import fest2 from "../imgs/fest2.jpg";
import "../styles/page1.css";

function Page1() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="about">
          <h2>About ShowTime Event</h2>
        </div>
        <div className="container2 container-flex">
          <div className="section1">
            <div className="first">
              <h3>
                Showtime Event is a recognized and trusted service currently
                active in every field of event organization.
              </h3>
            </div>
            <div className="second">
              <h4>
                We are using the latest tools and highly professional staff to
                finish all of your works. We have a wide range of networks in
                this industry to give you the required results. We are one of
                the most selected and rewarded Corporate Event Planners, Wedding
                event Planners, organizers and best event management company in
                Delhi NCR, India.
              </h4>
              <h4>
                Showtime event is having vast experience in its field and know
                every rule to organize great events. We do our works with our
                full commitment and hard determination. We are working as an
                event planner and music, light, catering, and decoration service
                provider as well. Find Showtime event as best event planners,
                event organizers, event management companies, wedding event
                planners in Delhi.
              </h4>
            </div>
          </div>
          <div className="section2">
            <div className="img-container">
              <div className="img1">
                <img src={fest1} alt="img"></img>
              </div>
              <div className="img2">
                <img src={fest2} alt="img"></img>
              </div>
              <div className="btn">
                <button>
                  <Link to="/gallery" className="gallerybtn">
                    Gallery
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
