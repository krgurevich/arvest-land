import React, { useState } from "react";
import "../styles/Contact.css";
import { validateEmail } from "../utils/helpers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/fontawesome-free-solid";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [StatusMessage, setStatusMessage] = useState("");
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setStatusMessage("Email is invalid!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    if (!message) {
      setStatusMessage(`Message is required!`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setName("");
    setMessage("");
    setEmail("");
    setStatusMessage("Message Sent");
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
