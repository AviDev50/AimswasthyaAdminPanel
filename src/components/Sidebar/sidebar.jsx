import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const sidebarStyle = {
    position: "fixed",
    top: "70px", // below header
    left: isOpen ? "0" : "-260px",
    width: "280px",
    height: "762px",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e2e8f0",
    transition: "left 0.3s ease",
    zIndex: 999,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const ulStyle = { listStyle: "none", padding: "20px", margin: 0,gap:"90px" };
  const liStyle = (path) => ({
    padding: "10px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    display: "block",
    gap: "100px",
    marginTop:"10px",
    color: location.pathname === path ? "#ffffff" : "#1d1313ff",
    backgroundColor: location.pathname === path ? "#2563eb" : "transparent",
    fontWeight: location.pathname === path ? "600" : "400",
  });
  return (
    <>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <ul style={ulStyle}>
          <li><Link to="/dashboard" style={liStyle("/dashboard")}>Dashboard</Link></li>
          <li><Link to="/Patients" style={liStyle("/Patients")}>Patients</Link></li>
          <li><Link to="/appointments" style={liStyle("/appointments")}>Appointments</Link></li>
          <li><Link to="/doctors" style={liStyle("/doctors")}>Doctors</Link></li>
          <hr />
          <li><Link to="/hospitals" style={liStyle("/hospitals")}>Hospitals</Link></li>
          <li><Link to="/Payments" style={liStyle("/Payments")}>Payments & Discounts</Link></li>
          <li><Link to="/Supportqueries" style={liStyle("/Supportqueries")}>Support Queries</Link></li>
          <li><Link to="/Notification" style={liStyle("/Notification")}>Notifications</Link></li>
          <hr />
            <p style={{ cursor: "pointer", marginTop:"100px",color:"black" }}>🚪Help</p>
            <p style={{ cursor: "pointer", margin: "10px 0" }}>⚙️ Settings</p>
          <p style={{ cursor: "pointer", margin: "10px 0" }}>🚪 Logout</p>
        </ul>
      </aside>

      {/* Overlay (for mobile when sidebar open) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
          //  backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}

export default Sidebar;
