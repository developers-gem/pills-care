// import React, { useEffect, useState } from "react";
// import MedicationTable from "./MedicationTable";
// import "../PagesStyle/medications.css";

// const Medications = () => {
//   const [medications, setMedications] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const fetchMedications = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         "http://localhost:5000/api/medications/admin/all-medications",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       const data = await response.json();

//       console.log(data);

//       setMedications(data.data || []);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchMedications();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading medications...</div>;
//   }

//   return (
//     <div className="admin-medications-page">
//       <div className="page-title">
//         <h1>All User Medications</h1>

//         <p>Manage medicines added by all users</p>
//       </div>

//       <MedicationTable medications={medications} />
//     </div>
//   );
// };

// export default Medications;

import React, { useEffect, useState } from "react";
import MedicationTable from "./MedicationTable";
import "../PagesStyle/medications.css";

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const medicationsPerPage = 8;

  const fetchMedications = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/medications/admin/all-medications",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      setMedications(data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  // Pagination Logic
  const indexOfLastMedication = currentPage * medicationsPerPage;
  const indexOfFirstMedication = indexOfLastMedication - medicationsPerPage;

  const currentMedications = medications.slice(
    indexOfFirstMedication,
    indexOfLastMedication,
  );

  const totalPages = Math.ceil(medications.length / medicationsPerPage);

  if (loading) {
    return <div className="loading">Loading medications...</div>;
  }

  return (
    <div className="admin-medications-page">
      <div className="page-title">
        <h1>All User Medications</h1>

        <p>Manage medicines added by all users</p>
      </div>

      <MedicationTable medications={currentMedications} />

      {/* Pagination */}

      {medications.length > medicationsPerPage && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Medications;
