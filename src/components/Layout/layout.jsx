// import React from "react";
// import Sidebar from "../Sidebar/sidebar";
// import Header from "../Header/header";

// function Layout({ children }) {
//   return (
//     <div style={{ display: "flex" }}>
//       {/* Left Sidebar */}
//       <Sidebar />

//       {/* Right Section (Header + Content) */}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Header />
//         <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8fafc" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layout;



import React, { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          marginLeft: isSidebarOpen ? "240px" : "0",
          transition: "margin-left 0.3s ease",
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main style={{ padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
