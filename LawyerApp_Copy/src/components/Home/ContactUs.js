
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import "./ConstactUs.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("handleSubmit")
   

    addDoc(collection(db, "contacts"), {
      name,
      email,
      message
    })    
      .then((responce) => {
        setLoader(false);
        console.log(responce)
        alert("Your message has been submitted👍");
      
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us </h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Write Your Problem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "green" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>





    </>
  );
};

export default Contact;