import React, { useState } from "react";
// CSS
import "../styles/Contact.css";
// Email Validation Utils
import { validateEmail } from "../utils/helpers";

// Font Awesome Icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/fontawesome-free-solid";

function Contact() {
  // State Variables
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [StatusMessage, setStatusMessage] = useState("");
  const handleInputChange = (e) => {
    // Value and Name upon change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation Logic
    if (!validateEmail(email) || !name) {
      setStatusMessage("Email is invalid!");
      return;
    }

    if (!message) {
      setStatusMessage(`Message is required!`);
      return;
    }

    // Clear values if successful
    setName("");
    setMessage("");
    setEmail("");
    setStatusMessage("Thank you! Your message was sent.");
  };
  return (
    <div className="content">
      <h1>Contact Me</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row mb-5">
              <div className="col-md-12 ml-auto">
                <p>
                  <FontAwesomeIcon
                    className="font-awesome"
                    icon={faAddressCard}
                  />
                  &nbsp;Phone: (203) 555-5555 <br /> Email: info@arvestland.com
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form className="mb-5" onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="2"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button id="button" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                {StatusMessage && (
                  <div>
                    <p className="error-text">{StatusMessage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
