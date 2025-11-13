import React, { useState, useEffect } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  // Example API fetch (ready for backend)
  useEffect(() => {
    // Placeholder: Replace with actual API URL later
    fetch("/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch(() => {
        // Dummy data in case API not ready
        setAppointments([
          {
            id: 1,
            doctor: "Ravi S. Mittal, Chandni Chowk",
            date: "2025-01-03",
            time: "8:30 AM",
          },
          {
            id: 2,
            doctor: "Ravi S. Mittal, Chandni Chowk",
            date: "2025-01-14",
            time: "8:30 AM",
          },
          {
            id: 3,
            doctor: "Ravi S. Mittal, Chandni Chowk",
            date: "2025-01-21",
            time: "8:30 AM",
          },
          {
            id: 4,
            doctor: "Ravi S. Mittal, Chandni Chowk",
            date: "2025-01-19",
            time: "8:30 AM",
          },
        ]);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", padding: "20px" }}>
      {/* Page title */}
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "25px" }}>
        Appointments
      </h1>

      {/* Filter section */}
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Doctor's name"
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              padding: "8px 10px",
              width: "200px",
            }}
          />
          <input
            type="text"
            placeholder="Contact number"
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              padding: "8px 10px",
              width: "200px",
            }}
          />
          <input
            type="text"
            placeholder="Clinic name"
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              padding: "8px 10px",
              width: "200px",
            }}
          />
        </div>

        <button
          style={{
            backgroundColor: "#f1f5f9",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          Dr. Vikram Batra
        </button>
      </div>

      {/* Calendar */}
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        <h3 style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "600" }}>
          January 2025
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
            borderTop: "1px solid #e2e8f0",
            borderLeft: "1px solid #e2e8f0",
          }}
        >
          {Array.from({ length: 35 }).map((_, i) => {
            const date = new Date(2024, 11, 30 + i); // Example month layout
            const dateStr = date.toISOString().split("T")[0];
            const dayAppointments = appointments.filter((a) => a.date === dateStr);

            return (
              <div
                key={i}
                style={{
                  borderRight: "1px solid #e2e8f0",
                  borderBottom: "1px solid #e2e8f0",
                  padding: "10px",
                  minHeight: "80px",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "12px", color: "#64748b" }}>
                  {date.getDate()}
                </span>
                {dayAppointments.map((appt) => (
                  <div
                    key={appt.id}
                    style={{
                      background: "#1d4ed8",
                      color: "white",
                      fontSize: "10px",
                      borderRadius: "6px",
                      padding: "3px 5px",
                      marginTop: "5px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {appt.time} <br />
                    {appt.doctor}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Appointments;
