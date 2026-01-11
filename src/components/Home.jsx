import React from "react";
import "./Home.css";

import banner from "../assets/banner-placeholder.jpg";
import user1 from "../assets/user1.jpg";
import user3 from "../assets/user3.jpg";

export default function Home() {
  return (
    <section id="home" className="wrapperr">
      <div className="wrapper">

        <div className="hero-section">
          <div className="hero-left">
            <h1>
              Hi, I'm a <br />Harsh<br />
              <span> Full Stack</span> Developer <br />
              UI UX Artist <span>Mern Stack</span>
            </h1>

            <p>
              I have academic & personal project experience.
              Built real-world web applications using React and JavaScript with responsive UI designs.
            </p>

            <button className="start-btn">WELCOME</button>
          </div>

          <div className="hero-right">
            <div className="circle-banner">
              <img src={banner} className="center-img" />

              <div className="tag tag1">ES6+</div>
              <div className="tag tag2">React.js</div>
              <div className="tag tag3">Responsive UI</div>

              <img src={user1} className="small-img img1" />
              <img src={user3} className="small-img img3" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
