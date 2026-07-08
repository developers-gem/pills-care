import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const handleInput = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const notify = (val) => toast(val);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:5000/api/auth/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.success) {
      notify("User Deleted!");
    } else {
      notify("Something Went Wrong!");
    }

    setEmail("");
  };
  return (
    <div className="form-main">
      <h1>Pillscare</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-inner">
          <label htmlFor="delete">
            <h2>Enter Your Email</h2>
          </label>
          <input
            type="text"
            name="email"
            id="delete"
            value={email}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="deleteformbutton">
          Delete
        </button>
        <ToastContainer position="top-center" />
      </form>
    </div>
  );
};

export default DeleteUser;
