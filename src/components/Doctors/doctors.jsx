import React, { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [loading, setLoading] = useState(false);

  const fetchDoctors = async (page) => {
    setLoading(true);

    try {
      const response = await fetch(`/api/doctors?page=${page}`);

      // fake response for testing purpose
      const fakeData = {
        1: [
          {
            name: "Rajesh Kumar",
            gender: "Male",
            contact: "919191919191",
            qualification: "MBBS, MD",
            specialization: "Cardiology",
            year: 2001,
          },
          {
            name: "Amit Verma",
            gender: "Male",
            contact: "919191919192",
            qualification: "MBBS, MS",
            specialization: "Orthopedics",
            year: 2005,
          },
        ],
        2: [
          {
            name: "Pooja Sharma",
            gender: "Female",
            contact: "919191919193",
            qualification: "MBBS, MD",
            specialization: "Pediatrics",
            year: 2010,
          },
          {
            name: "Karan Singh",
            gender: "Male",
            contact: "919191919194",
            qualification: "MBBS, MS",
            specialization: "Neurology",
            year: 2008,
          },
        ],
        3: [
          {
            name: "Neha Gupta",
            gender: "Female",
            contact: "919191919195",
            qualification: "MBBS, MD",
            specialization: "Dermatology",
            year: 2012,
          },
          {
            name: "Ravi Mehta",
            gender: "Male",
            contact: "919191919196",
            qualification: "MBBS, MS",
            specialization: "Urology",
            year: 2003,
          },
        ],
      };

      

      // Simulate delay
      await new Promise((r) => setTimeout(r, 500));

      // Set simulated data
      setDoctors(fakeData[page]);
      setTotalPages(3); // later set from backend response
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors(currentPage);
  }, [currentPage]);

  const containerStyle = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fb",
    minHeight: "100vh",
  };

  const headerStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "25px",
  };

  const searchBoxStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "25px",
  };

  const inputStyle = {
    marginLeft: "10px",
    borderRadius: "6px",
    height: "35px",
    width: "220px",
    border: "1px solid #ccc",
    padding: "0 10px",
    outline: "none",
  }; 

  const tableContainerStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    padding: "20px",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    textAlign: "left",
    backgroundColor: "#f5f7fa",
    padding: "12px",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #eee",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "100px",
  };

  const buttonStyle = {
    backgroundColor: "#012970",
    color: "white",
    border: "none",
    padding: "10px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };
 
  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "15px",
  };

  const pageButtonStyle = (isActive) => ({
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#012970" : "#e0e0e0",
    color: isActive ? "#fff" : "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
    border: "none",
  });

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Doctors</h1>

      {/* Search Section */}
      <div style={searchBoxStyle}>
        <label style={{ fontWeight: "bold" }}>Select a doctor:</label>
        <input type="text" style={inputStyle} placeholder="Doctor's name" />
        <input type="text" style={inputStyle} placeholder="Contact number" />
        <input type="text" style={inputStyle} placeholder="Specialization" />
      </div>

      {/* Doctors Table */}
      <div style={tableContainerStyle}>
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading doctors...</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>S. No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Qualification</th>
                <th style={thStyle}>Specialization</th>
                <th style={thStyle}>Practice start year</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doc, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{doc.name}</td>
                  <td style={tdStyle}>{doc.gender}</td>
                  <td style={tdStyle}>{doc.contact}</td>
                  <td style={tdStyle}>{doc.qualification}</td>
                  <td style={tdStyle}>{doc.specialization}</td>
                  <td style={tdStyle}>{doc.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
</div>
        {/* Pagination */}
        <div style={paginationStyle}>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              style={pageButtonStyle(currentPage === i + 1)}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      

      {/* Action Buttons */}
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>View doctor profile</button>
        <button style={buttonStyle}>View schedule</button>
        <button style={buttonStyle}>Revenue & Payments</button>
      </div>
    </div>
  );
}

export default Doctors;
