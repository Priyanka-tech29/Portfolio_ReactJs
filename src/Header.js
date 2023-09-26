import React from "react";
import Navbar from "./Navbar";
import Allvin from "./Allvin";
import Contact from "./Contact";
import HowitWorks from "./HowitWorks";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Priyanka <br /> Software Engineer
              </h1>
              <p className="main-hero-para">
                An aspiring software engineer with knowledge in software
                engineering practices such as coding, testing, code reviews etc.
                Strong ability to communicate with clients and ability to
                express ideas clearly and concisely.
              </p>
              <h3>Keep in Touch..............</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Send Me</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="./image/003.jpg" alt="heroimg" className="img-fluid" />
              <img
                src="./image/004.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
