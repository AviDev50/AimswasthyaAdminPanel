import React from "react";

function Header({ toggleSidebar }) {
  return (
    <header
      style={{
        position: "fixed",
        //width:"1280px",
        height:"70px",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {/* Left side - Toggle + Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={toggleSidebar}
          style={{
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            marginLeft:"0px"
          }}
        >
          ☰
        </button>
        </div>
        {/* <img src="/logos/3 8014.png"
        style={{ height: "50px",width:"auto",marginLeft:"0px",objectFit:"contain" }} />
      </div> */}
      <div style={{ width: "200px", height: "100px", overflow: "hidden",marginLeft:"-100px"}}>
  <img
    src="/logos/3 8014.png"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
</div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for anything..."
        style={{
          flex: 1,
          display:"flex",
          maxWidth: "500px",
          marginRight:"400px",
          backgroundColor: "#f1f5f9",
          padding: "8px 12px",
         border: "none",
          borderRadius: "6px",
        }}
      />

      {/* Right side - Admin avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            background: "#2563eb",
            color: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          A
        </div>
        <span>Admin</span>
      </div>
    </header>
  );
}

export default Header;
