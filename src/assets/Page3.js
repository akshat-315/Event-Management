import React from "react";
import "../styles/contact.css";
import { useState } from "react";

export default function Page3() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [dob, setDob] = useState("");
  const [E_name, setE_Name] = useState("");
  const [E_type, setE_Type] = useState("");
  const [phone_no, setPhone_No] = useState("");
  const [gmail, setGmail] = useState("");
  const [decoration, setDecoration] = useState("");
  const [food, setFood] = useState("");
  const [special_guest, setSpecial_Guest] = useState("");
  // const [college_name, setCollege_Name] = useState("");
  // const [committee_name, setCommittee_Name] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [pay_date, setPay_Date] = useState("");
  // const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      gmail,
      phone_no,
      branch,
      dob,
      E_name,
      E_type,
      decoration,
      food,
      special_guest,
      // college_name,
      // committee_name,
      // designation,
      // pay_date,
      // amount,
    };

    fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully!");
        } else {
          console.error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  return (
    <div className="contact-us-container">
      <div className="section1"></div>
      <div className="contact-us-header">
        <h2>Contact Us</h2>
        <p>
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} action="/data" method="post">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gmail">Gmail</label>
          <input
            type="email"
            id="gmail"
            name="gmail"
            value={gmail}
            onChange={(event) => setGmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_no">Phone Number</label>
          <input
            type="text"
            id="phone_no"
            name="phone_no"
            value={phone_no}
            onChange={(event) => setPhone_No(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="E_name">Event Name</label>
          <input
            type="text"
            id="E_name"
            name="E_name"
            value={E_name}
            onChange={(event) => setE_Name(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="E_type">Event Type</label>
          <input
            type="text"
            id="E_type"
            name="E_type"
            value={E_type}
            onChange={(event) => setE_Type(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="decoration">Decoration Budget</label>
          <input
            type="number"
            id="decoration"
            name="decoration"
            value={decoration}
            onChange={(event) => setDecoration(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="food">Food Budget</label>
          <input
            type="text"
            id="food"
            name="food"
            value={food}
            onChange={(event) => setFood(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="special_guest">Number of Special guests</label>
          <input
            type="text"
            id="special_guest"
            name="special_guest"
            value={special_guest}
            onChange={(event) => setSpecial_Guest(event.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="college_name">College Name</label>
          <input
            type="text"
            id="college_name"
            name="college_name"
            value={college_name}
            onChange={(event) => setCollege_Name(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="committee_name">Committee Name</label>
          <input
            type="text"
            id="committee_name"
            name="committee_name"
            value={committee_name}
            onChange={(event) => setCommittee_Name(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Your Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={designation}
            onChange={(event) => setDesignation(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pay_date">Pay Date</label>
          <input
            type="date"
            id="pay_date"
            name="pay_date"
            value={pay_date}
            onChange={(event) => setPay_Date(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Cost of one pass</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div> */}
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
