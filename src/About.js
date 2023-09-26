import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <section className=" container main-about">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
            <p>Tackle Your Problems Our First Priority.</p>

            <p>we work to take care of your problems</p>
            <div className="btn-about">
              <button type="submit">connect</button>
            </div>
          </div>
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images-ab">
            <img src="./image/green.jpg" alt="heroimg" className="img-fluid" />
          </div>
          <div>
            <p className="a">Our Speciality</p>

            <div className="col-12 col-lg-12 max-auto list">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h4> Computer programming languages</h4>
                  <i class="uil uil-laptop cm"></i>
                </div>
                <div className="col-6 col-lg-3">
                  <h4> Web Developer</h4>
                  <i class="uil uil-window wb"></i>
                </div>
                <div className="col-6 col-lg-3">
                  <h4>Java Developer</h4>
                  <i class="uil uil-desktop-cloud-alt jd"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
