import React from "react";

const Contact = () => {
  return (
    <div><section>
      <contacts className="all">
        <section className="contactus-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="row">
                  <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading fw-bold">
                      Connect with our team <br /> @techTeam.
                    </h1>
                    <p className="main-hero-para">
                      Google Contacts is a contact management service developed
                      by Google. It is available as an Android mobile app, a web
                      app,
                    </p>
                    <figure>
                      <img
                        src="./image/005.jpg"
                        alt="contatUsImg"
                        className="img-fluid"
                      />
                    </figure>
                  </div>

                  <div className="contact-rightside col-12 col-lg-7">
                    <form method="POST">
                      <div className="row">
                        <h3>Good to see you....</h3>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Mobile"
                          />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Email Id"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div className="col-12 contact-input-feild">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Add Address"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div className="col-12 ">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter Your Massage"
                          />
                        </div>
                      </div>
                      <div class="form-check form-checkbox-style">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          className="main-hero-para"
                        >
                          I agree that you can contact me at the email address
                          or mobile number above
                        </label>
                      </div>
                      <button type="submit" className="btn btn-style w-100">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </contacts>
      </section></div>
  );
};

export default Contact;
