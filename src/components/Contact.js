import React, { useState } from "react";
// CSS
import "../styles/Contact.css";
// Email Validation Utils
import { capitalizeFirstLetter, validateEmail } from "../utils/helpers";

// Font Awesome Icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/fontawesome-free-solid";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    name: "",
    message: "",
  });
  const {
    email: emailError,
    name: nameError,
    message: messageError,
  } = errorMessages;
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    // Value and Name upon change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setFormState({ ...formState, [inputType]: inputValue });

    // Set email, name, and message
  };
  const handleInputBlur = (event) => {
    if (event.target.name === "email") {
      const emailValid = validateEmail(event.target.value);

      if (!emailValid) {
        setErrorMessages({
          ...errorMessages,
          email: "Valid email is required",
        });
      } else {
        setErrorMessages({ ...errorMessages, email: "" });
      }
    }

    if (event.target.name === "name" || event.target.name === "message") {
      if (!event.target.value.length) {
        setErrorMessages({
          ...errorMessages,
          [event.target.name]: `${capitalizeFirstLetter(
            event.target.name
          )} is required`,
        });
      } else {
        setErrorMessages({ ...errorMessages, [event.target.name]: "" });
      }
    }

    const errorsPresent = emailError || nameError || messageError;

    if (!errorsPresent) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Successfully sent");
    setFormState({
      email: "",
      name: "",
      message: "",
    });
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
                        onBlur={(value) => handleInputBlur(value)}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        required
                      />
                      {nameError && <p className="error-text">{nameError}</p>}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        value={email}
                        name="email"
                        onBlur={(value) => handleInputBlur(value)}
                        onChange={handleInputChange}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      {emailError && <p className="error-text">{emailError}</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea
                        value={message}
                        name="message"
                        onBlur={(value) => handleInputBlur(value)}
                        onChange={handleInputChange}
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="2"
                        placeholder="Write your message"
                        required
                      ></textarea>
                      {messageError && (
                        <p className="error-text">{messageError}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button id="button" type="submit">
                        Submit
                      </button>
                      {formStatus && <p className="error-text">{formStatus}</p>}
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
};

export default Contact;
