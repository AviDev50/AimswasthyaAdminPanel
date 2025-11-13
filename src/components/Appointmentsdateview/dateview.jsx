import React, { useState } from "react";

function Appointments() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    {
      id: 1,
      name: "Rajesh Kumar",
      gender: "Male",
      contact: "919191919191",
      appointment: "Jan 3 - 8:30 am",
      status: "Completed",
      dob: "01/01/1992",
      weight: "75 Kg",
      height: "178 Cm",
      symptoms: "Chest pain, High blood pressure, and Fatigue",
      enquiries: "No enquiries found",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      gender: "Male",
      contact: "919191919191",
      appointment: "Jan 3 - 8:30 am",
      status: "Due",
      dob: "01/01/1992",
      weight: "75 Kg",
      height: "178 Cm",
      symptoms: "Chest pain, High blood pressure, and Fatigue",
      enquiries: "No enquiries found",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      gender: "Male",
      contact: "919191919191",
      appointment: "Jan 3 - 8:30 am",
      status: "Due",
      dob: "01/01/1992",
      weight: "75 Kg",
      height: "178 Cm",
      symptoms: "Chest pain, High blood pressure, and Fatigue",
      enquiries: "No enquiries found",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "10px" }}>Appointments</h1>

      {/* Date + Doctor */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: "15px 25px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: "25px",
        }}
      >
        <h3 style={{ margin: 0 }}>January 03, 2025</h3>
        <button
          style={{
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            background: "white",
            padding: "10px 15px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Dr. Vikram Batra
        </button>
      </div>

      {/* Patients Table */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 25px 0",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Patients</h3>
          <span style={{ color: "#2563eb", fontWeight: 500, cursor: "pointer" }}>
            View all
          </span>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "2px solid #2563eb",
                backgroundColor: "#f8fafc",
              }}
            >
              <th style={{ padding: "12px" }}>S. No</th>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Gender</th>
              <th style={{ padding: "12px" }}>Contact</th>
              <th style={{ padding: "12px" }}>Appointment</th>
              <th style={{ padding: "12px" }}>Status</th>
              <th style={{ padding: "12px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, index) => (
              <tr
                key={p.id}
                onClick={() => setSelectedPatient(p)}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor:
                    selectedPatient?.id === p.id ? "#1e3a8a" : "white",
                  color: selectedPatient?.id === p.id ? "white" : "black",
                  transition: "background 0.2s ease",
                }}
              >
                <td style={{ padding: "10px" }}>{index + 1}</td>
                <td style={{ padding: "10px" }}>{p.name}</td>
                <td style={{ padding: "10px" }}>{p.gender}</td>
                <td style={{ padding: "10px" }}>{p.contact}</td>
                <td style={{ padding: "10px" }}>{p.appointment}</td>
                <td style={{ padding: "10px" }}>{p.status}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    style={{
                      backgroundColor:
                        selectedPatient?.id === p.id ? "white" : "#2563eb",
                      color:
                        selectedPatient?.id === p.id ? "#2563eb" : "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "5px 12px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Patient Info (Bottom Cards) */}
      {selectedPatient && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Left Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              display: "flex",
              gap: "20px",
            }}
          >
            <img
              src="https://via.placeholder.com/80"
              alt="patient"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <div>
              <h3 style={{ margin: "0 0 8px" }}>{selectedPatient.name}</h3>
              <p style={{ margin: 0 }}>Date of birth: {selectedPatient.dob}</p>
              <p style={{ margin: 0 }}>Weight: {selectedPatient.weight}</p>
              <p style={{ margin: 0 }}>Height: {selectedPatient.height}</p>
            </div>
          </div>

          {/* Symptoms */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h4>Symptoms</h4>
            <p style={{ margin: 0 }}>{selectedPatient.symptoms}</p>
          </div>

          {/* Support Enquiries */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h4>Support Enquiries</h4>
            <p style={{ margin: 0 }}>{selectedPatient.enquiries}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
