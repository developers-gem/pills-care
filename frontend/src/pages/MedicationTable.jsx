import React from "react";

const MedicationTable = ({ medications }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>User</th>

            <th>Email</th>

            <th>Medicine</th>

            <th>Strength</th>

            <th>Type</th>

            <th>Dosage</th>

            <th>Frequency</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {medications.length > 0 ? (
            medications.map((med) => (
              <tr key={med._id}>
                <td>{med.user?.name || "Unknown"}</td>

                <td>{med.user?.email || "N/A"}</td>

                <td>{med.medicineName}</td>

                <td>{med.strength}</td>

                <td>{med.medicineType}</td>

                <td>{med.dosage}</td>

                <td>{med.frequency}</td>

                <td>
                  <span className={`status ${med.status.toLowerCase()}`}>
                    {med.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No medications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationTable;
