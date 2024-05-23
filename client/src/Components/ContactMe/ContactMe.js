import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import "./ContactMe.css";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        toast.error(res.data.msg);
      } else if (res.status === 200) {
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openResume = () => {
    const url = "https://docsend.com/view/s/r9tgm4am327brtsx";
    window.open(url, "_blank");
  };

  return (
    <section id="contact-me">
      <div className="contact-me-flexbox">
        <div className="contact-me-form">
          <h1>Contact Me</h1>
          <p className="contact-me-email ">Email: <span className="my-email">frostyyallen@gmail.com</span></p>
          <p className="send-message">Send me a message!</p>
          <div className="contact-me-form-container">
            <form onSubmit={submitForm}>

              <label htmlFor="name">Name</label>
              <input type="text" onChange={handleName} value={name} required />

              <label htmlFor="email">Email</label>
              <input type="email" onChange={handleEmail} value={email} required />

              <label htmlFor="message">Message</label>
              <textarea type="text" onChange={handleMessage} value={message} required />

              <div className="send-btn">
                <button type="submit">
                  Send       
                  <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="resume-flexbox">
          <img
            src={require("../../imgs/ContactMe/contact-me-resume-blurred.png")}
            alt="Resume"
          />
          <button className="contact-me-resume-button" onClick={openResume}>Resume <i className="fa-regular fa-file">  </i> | Download <i className="fa-solid fa-download"></i></button>
        </div>
      </div>
    </section>
  );
}
