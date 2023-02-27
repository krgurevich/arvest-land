import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row mb-5">
              <div className="col-md-4 mr-auto">
                <h3 className="thin-heading mb-4">Contact Me</h3>
              </div>
              <div className="col-md-6 ml-auto">
                <h3 className="thin-heading mb-4">Contact Info</h3>
                <p>
                  Phone: (203) 555-5555 <br /> Email: info@arvestland.com
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="2"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="submit"
                        value="Send Message"
                        className="button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
