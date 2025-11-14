import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Doctors from "./components/Doctors/doctors";
import Layout from "./components/Layout/layout";
import Appointmentsdateview from "./components/Appointmentsdateview/dateview";
import Hospitals from "./components/Hospitals/hospitals";
import Notification from "./components/Notifications/notifications";
import Patients from "./components/Patients/patients";
import Appointments from "./components/Appointments/appointments"
import Payments from "./components/PaymentAndDiscounts/payments";
import Supportqueries from "./components/SupportQueries/supportqueries";

function App() {
  return (
    <Routes>
      {/* Layout ke andar pages */}
      <Route
        path="/Dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/Doctors"
        element={
          <Layout>
            <Doctors />
          </Layout>
        }
      />
      <Route
        path="/Appointmentsdateview"
        element={
          <Layout>
            <Appointmentsdateview />
          </Layout>
        }
      />
         <Route
        path="/Appointments"
        element={
          <Layout>
            <Appointments />
          </Layout>
        }
      />
      <Route
      path="/Hospitals"
      element={
        <Layout>
          <Hospitals />
        </Layout>
      }
      />
       <Route
      path="/Hospitals"
      element={
        <Layout>
          <Hospitals />3
        </Layout>
      }
      />
      <Route
      path="/Patients"
      element={
        <Layout>
          <Patients />
        </Layout>
      }
      />
       <Route
      path="/Payments"
      element={
        <Layout>
          <Payments />
        </Layout>
      }
      />
        <Route
      path="/Supportqueries"
      element={
        <Layout>
          <Supportqueries />
        </Layout>
      }
      />   <Route
      path="/Notification"
      element={
        <Layout>
          <Notification/>
        </Layout>
      }
      />

      {/* Example: agar kabhi login ya 404 page banana ho */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
