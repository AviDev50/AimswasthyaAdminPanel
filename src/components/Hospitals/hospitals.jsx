import React, { useState, useEffect } from "react";

function Hospitals() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
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
    };
    setDoctors(fakeData[1]); 
  }, []);

  const pageStyle = {
    padding: "24px",
    backgroundColor: "#f8fafc",
    minHeight: "calc(100vh - 80px)",
  };

  const mainContainerStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    padding: "24px",
    width:"auto",
    marginLeft:"22px",
    marginRight:"auto"
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#1e293b",
  };

  const tableContainerStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    padding: "20px",
    overflowX: "auto",
    marginTop: "30px",
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

  return (
    <div className="main" style={{}}>
       <h1 style={{ fontSize: "28px", fontWeight: "Bold", marginTop:"73px",width:"145px",height:"48px",
         marginLeft:"35px",font:"poppins"
        }}>
        Hospitals
     </h1>
     <div
  className="hospitalsNameContainer"
  style={{
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    marginLeft: "40px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    backgroundColor: "#ffffff",
    gap:"2cm"
  }}
>
  {[
    { name: "IBS Hospital, Lajpat Nagar", active: true },
    { name: "IBS Hospital, Lajpat Nagar", active: false },
    { name: "IBS Hospital, Lajpat Nagar", active: false },
    { name: "IBS Hospital, Lajpat Nagar", active: false },
  ].map((hospital, index) => (
    <div
      key={index}
      style={{
        backgroundColor: hospital.active ? "#0b2d6b" : "#f3f4f6",
        color: hospital.active ? "#ffffff" : "#6b7280",
        padding: "12px 25px",
        borderRadius: "10px",
        fontWeight: "500",
        fontSize: "15px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {hospital.name}
    </div>
  ))}
</div>

     <h3 style={{marginLeft:"35px"}}>Manage Hospital</h3>
       <div className="manage Hospital Container" style={{width:"auto",height:"50vh",borderRadius:"10px",
       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",marginLeft:"40px",display:"flex",
       gap:"100px"}}>
        <div className="addPhotoInput" style={{width:"20vw"}}><p> photos</p></div> 
       <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "500px",
    alignItems: "center",
    marginTop: "40px",
  }}
>

      <div className="addPhotoInput" style={{width:"20vw",borderRadius:"50px"}}><p>
        <img src="/logos/Ellipse 2414.png" style={{height:"25vh"}}/>
      </p>
  
</div>

</div> 
       </div>
       <div className="thirdCombineContainer" style={{display:"flex",width:"auto",marginTop:"15px"}}>
      <div
  className="bulkAddDoctorsContainer"
  style={{
    width: "35vw",
    minHeight: "40vh",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    marginLeft: "40px",
    backgroundColor: "#fff",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }}
>
  <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>
    Bulk add doctors
  </h2>
  <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>
    Add multiple doctors at once
  </p>

  <p style={{ fontSize: "14px", color: "#374151", marginBottom: "10px" }}>
    Import data
  </p>

  {/* Add file button */}
  <button
    style={{
      width: "100%",
      backgroundColor: "#f3f4f6",
      border: "none",
      borderRadius: "30px",
      padding: "10px 0",
      fontSize: "14px",
      color: "#6b7280",
      cursor: "pointer",
      marginBottom: "14px",
    }}
  >
    Add file
  </button>

  {/* Add manually button */}
  <button
    style={{
      width: "100%",
      backgroundColor: "#0b2d6b",
      color: "#ffffff",
      border: "none",
      borderRadius: "30px",
      padding: "10px 0",
      fontSize: "14px",
      cursor: "pointer",
      fontWeight: "500",
    }}
  >
    Add manually
  </button>
</div>

       <div className="completeProfileContainer"
       style={{height:"50vh",borderRadius:"10px",width:"40vw",
       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",marginLeft:"40px"}}>
     <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0", marginTop:"30px",marginLeft:"10px"}}>
    Complete Profile
  </h2>
  <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "15px",marginLeft:"10px" }}>
    Add about location
  </p>
      <div
  style={{
    marginTop: "25px",
    marginLeft: "30px",
    marginRight: "20px",
    width: "auto",
    height: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
  }}
>
  <input
    type="text"
    placeholder="About hospital"
    style={{
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "16px",
      color: "#333",
    }}
  />
</div>

         <div className="About Location" style={{marginTop:"25px",width:"auto",height:"150px",borderRadius:"10px",
       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",marginLeft:"30px",marginRight:"20px"}}> 
       </div>
      </div>
      </div>
          <div className="faqsContainer" style={{marginTop:"15px",width:"auto",height:"50vh",borderRadius:"10px",
       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",marginLeft:"40px"}}>
        <h1 style={{marginLeft:"30px"}}>FAQs</h1>
             <div
             
  style={{
    marginTop: "45px",
    marginLeft: "30px",
    marginRight: "20px",
    width: "auto",
    height: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
  }}
>
  <input
    type="text"
    placeholder="Questions"
    style={{
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "16px",
      color: "#333",
    }}
  />
</div> 
     <div
  style={{
    marginTop: "25px",
    marginLeft: "30px",
    marginRight: "20px",
    width: "auto",
    height: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
  }}
>
  <input
    type="text"
    placeholder="Answer"
    style={{
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "16px",
      color: "#333",
    }}
  />
</div>
<div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
  <button
    style={{
      backgroundColor: "#42A5F5",
      color: "white",
      border: "none",
      borderRadius: "30px",
      padding: "10px 30px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.3s",
      marginLeft:"12cm",
      width:"5cm"
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#2196F3")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#42A5F5")}
  >
    Add more
  </button>

  <button
    style={{
      backgroundColor: "#0D47A1",
      color: "white",
      border: "none",
      borderRadius: "30px",
      padding: "10px 40px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.3s",
        width:"5cm"
      //marginLeft:"12cm"
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#1565C0")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#0D47A1")}
  >
    Save
  </button>
</div>

       </div>
    <div style={pageStyle}>
      <div style={mainContainerStyle}>
        <h1 style={headingStyle}></h1>

        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>S. No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Qualification</th>
                <th style={thStyle}>Specialization</th>
                <th style={thStyle}>Practice Start Year</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, index) => (
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
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hospitals;

