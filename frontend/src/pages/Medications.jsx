import React, { useEffect, useState } from "react";
import MedicationTable from "./MedicationTable";
import "../PagesStyle/medications.css";

const Medications = () => {
  const [medications, setMedications] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchMedications = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/medications", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log(data);

      setMedications(data.medications || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMedications();
  }, []);

  if (loading) {
    return <div className="loading">Loading medications...</div>;
  }

  return (
    <div className="admin-medications-page">
      <div className="page-title">
        <h1>All User Medications</h1>

        <p>Manage medicines added by all users</p>
      </div>

      <MedicationTable medications={medications} />
    </div>
  );
};

export default Medications;
