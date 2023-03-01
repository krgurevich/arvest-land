import React from "react";
import "../styles/Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/fontawesome-free-solid";

export default function Contact() {
  return (
    <div className="content">
      <h1>Contact Me</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row mb-5">
              <div className="col-md-12 ml-auto">
                <p>
                <FontAwesomeIcon className="font-awesome" icon={faAddressCard} />
                &nbsp;Phone: (203) 555-5555 <br /> Email: info@arvestland.com
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