import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL =", API_URL);
const DeleteUser = () => {
  const [email, setEmail] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const notify = (message) => toast(message);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/auth/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        notify("User Deleted!");
      } else {
        notify(data.message || "Something Went Wrong!");
      }

      setEmail("");
    } catch (error) {
      console.error(error);
      notify("Unable to connect to server.");
    }
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
            type="email"
            id="delete"
            name="email"
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