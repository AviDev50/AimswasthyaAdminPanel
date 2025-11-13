import React from 'react';
import './dashboard.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  // Chart Data
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Patients',
        data: [90, 40, 70, 60, 80, 50, 30],
        backgroundColor: '#2563eb',
        borderRadius: 12,
      },
      {
        label: 'Via Aimswasthya',
        data: [70, 20, 50, 30, 60, 40, 20],
        backgroundColor: '#60a5fa',
        borderRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="only-main" style={{height:"80vh"}}>
    <div className="dashboard" style={{marginTop: '0', overflowY:'auto'}}>


      {/* Main Section */}
      <main className="main" >
      {/*  <header className="topbar">
          <input type="text" placeholder="Search anything..." />
          <div className="profile">
            <div className="avatar">A</div>
            <span>Admin</span>
          </div>
        </header>
      */}
        <section className="content">
          <h1>Dashboard</h1>

  {/* /* Dropdown (Top-right corner)
  <div
    style={{
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: '#f3f4f6',
      borderRadius: '8px',
      padding: '4px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
      color: '#111827',
    }}
  >
    <span>Monthly</span>
    <span style={{ marginLeft: '6px', fontSize: '12px' }}>▼</span>
  </div>
            */}

          {/* Top Stats Cards */}
          <div className="cards">
            <div className="card">
              <small>Server Health</small>
              <p className="value">Load Number</p>
              <span className="green">↑ 9.2%</span>{' '}
              <span className="black">from last month</span>
            </div>
            <div className="card">
              <small>Total Active Users</small>
              <p className="value">1,662</p>
              <span className="green">↑ 5.4%</span>{' '}
              <span className="black">from last month</span>
            </div>
            <div className="card">
              <small>Total Downloads</small>
              <p className="value">812</p>
              <span className="red">↓ 1.9%</span>{' '}
              <span className="black">from last month</span>
            </div>
          </div>
          
<div className="top-section">
  {/* Chart Section */}
  <div className="chart-section">
    <h3>Patient Statistics</h3>
    <Bar data={data} options={options} />
  </div>

  {/* Revenue Section */}
  <div className="revenue-card">
    <div className="revenue-header">
      <div className="revenue-details">
        <h4>Revenue from transactions</h4>
        <p className="revenue-value">₹1,20,000</p>
        <small style={{ color: "green" }}>↑ 10.9% up from last month</small>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <p>Revenue from DigiSwasthya users: ₹20,000</p>
      <p>Revenue from appointments: ₹1,00,000</p>
      <button className="primary-btn" style={{width:'100%', marginTop:'auto',alignSelf:'center'}}>
        Payments <span className="arrow-right">→</span>
      </button>
    </div>
  </div>
  
</div>
{/* Bottom Section */}
<div className="bottom-section" style={{display:'flex',gap:'20px',margin:'20p 0', justifyContent:'space-between'}}>
  {/* Row 1: Server/API + Bulk Notifications */}
  <div
  className="bottom-row"
  style={{
    display: "flex",
    gap: "20px",
    margin: "20px",
    alignItems: "stretch",
  }}
>
  <div
    className="status-card"
    style={{
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.50)",
      flex: "1",
      width: "300px",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }}
  >
    {/* LEFT SIDE: Server Status */}
    <div className="server-status" style={{ width: "48%" }}>
      <h4 style={{ color: "grey", marginBottom: "8px" }}>Server Status</h4>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ color: "black", fontWeight: "700",marginTop:"20px" }}>ACTIVE</span>
        <span style={{ color: "green", fontSize: "20px", alignItems:"center",marginTop:"18px" }}>●</span>
      </div>
      <p
        style={{
          color: "gray",
          marginTop: "45px",
          fontSize: "14px",
        }}
      >
        0 issues found
      </p>
    </div>

    {/* RIGHT SIDE: API Performance */}
    <div className="api-performance" style={{ width: "48%" }}>
      <h4 style={{ color: "grey", marginBottom: "0" }}>API Performance</h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: "14px",
          lineHeight: "1.1",
        }}
      >
        <li>
          API name <span style={{ color: "green",fontSize:"20px"}}>●</span>
        </li>
        <li>
          API name <span style={{ color: "green",fontSize:"20px" }}>●</span>
        </li>
        <li>
          API name <span style={{ color: "red",fontSize:"20px" }}>●</span>
        </li>
         <li>
          API name <span style={{ color: "red",fontSize:"20px" }}>●</span>
        </li>
      </ul>
      <p style={{ color: "gray", fontSize: "14px", marginTop: "10px"}}>
        1 issue found
      </p>
    </div>
  </div>


    <div className="notification-card" style={{background:'white',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.50)',
      flex:'1',padding:'20px',display:'flex',justifyContent:'space-between',height:'200px',flexDirection:'column'
    }}>
      <h4>Bulk Notifications</h4>
      <button className="primary-btn" style={{width:'100%', marginTop:'auto',alignSelf:'center'}}>Send Notifications</button>
    </div>
  </div>

  {/* Row 2: Support Queries Full Width */}
  <div className ="support-card"style={{background:'white',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.50)',
      padding:'20px',margin:'20px',width:'100%'
    }}>
    <h4>Support Queries</h4>
    <button className="primary-btn" style={{width:'100%', marginTop:'auto',alignSelf:'center'}}>3 Queries found</button>
  </div>
</div> 
        </section>
      </main>
    </div>
    </div>
  );
}

export default Dashboard;
