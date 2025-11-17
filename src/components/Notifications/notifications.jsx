import React from "react";

function Notifications() {
  return (
    <div
      style={{
        flex: 1,
        padding: "30px",
        backgroundColor: "#f8f9fb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "30px" }}>
        Notifications module
      </h1>

      {/* Select Users */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            marginBottom: "15px",
            fontSize: "16px",
          }}
        >
          Select users :
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          {["All users", "Patients", "Doctors"].map((label, index) => (
            <button
              key={index}
              style={{
                flex: "1",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid #d0d0d0",
                backgroundColor: "#f8f9fb",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Select Notification Type */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            marginBottom: "15px",
            fontSize: "16px",
          }}
        >
          Select notification type :
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          {["In-app notifications", "Push notifications"].map((type, index) => (
            <button
              key={index}
              style={{
                flex: "1",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid #d0d0d0",
                backgroundColor: "#f8f9fb",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Library Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontWeight: "500" }}>Library (In-app notifications)</p>
          <button
            style={{
              backgroundColor: "#f0f4f8",
              border: "1px solid #d0d0d0",
              borderRadius: "8px",
              padding: "6px 12px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            View saved templates
          </button>
        </div>

        {/* Categories */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
            Account & Profile
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {[
              "Complete profile",
              "Add medical records",
              "Complete profile (Doctor)",
              "Add your location (Doctor)",
              "Add schedule (Doctor)",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px 20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600" }}>DigiSwasthya</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            <div
              style={{
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              Upgrade to DigiSwasthya
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Universal</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {[
              "Privacy policy update",
              "New features are live",
              "New city",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px 20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Notification Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <p style={{ fontWeight: "500", marginBottom: "10px" }}>
          Write the notification message :
        </p>
        <textarea
          rows="4"
          placeholder="Type your message here..."
          style={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            resize: "none",
            fontSize: "15px",
            outline: "none",
          }}
        ></textarea>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {[
          { text: "Save as template", color: "#4da6ff" },
          { text: "Recurring", color: "#2a9df4" },
          { text: "Send", color: "#003c8f" },
        ].map((btn, index) => (
          <button
            key={index}
            style={{
              padding: "10px 25px",
              borderRadius: "10px",
              border: "none",
              color: "white",
              backgroundColor: btn.color,
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
