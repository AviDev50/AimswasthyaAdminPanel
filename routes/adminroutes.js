import express from "express";
import { adminLogin,register,getTotalActiveUsers,getDoctorsDetails,getAppointmentsDetailsByDoctorId,
    getPatientProfileByPatientId,upsertAdminDetails,adminLogout
 } from "../controllers/admincontroller.js";
import auth from "../middlewares/authorization.js";

const router = express.Router();

// Public route → no token needed
router.post("/adminLogin",adminLogin);
router.post("/register",register);
router.post("/adminLogout",adminLogout);
router.get("/getTotalActiveUsers",getTotalActiveUsers);
router.get("/getDoctorsDetails",getDoctorsDetails);
router.get("/getAppointmentsDetailsByDoctorId",getAppointmentsDetailsByDoctorId);
router.get("/getPatientProfileByPatientId",getPatientProfileByPatientId);
router.post("/upsertAdminDetails",upsertAdminDetails);

// Secured route → token needed
// router.get("/profile", auth, (req,res) => {
//   res.json({
//     status: true,
//     message: "Valid token!",
//     admin: req.admin,
//   });
// });

// Very important
export default router;
