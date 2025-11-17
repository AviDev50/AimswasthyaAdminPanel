import db from "../config/dbconfig.js";
import jwt from "jsonwebtoken";

export async function adminLogin(req, res) {
  const { phone_number, password_hash } = req.body;
  let connection;

  if (!phone_number || !password_hash) {
    return res.status(400).json({ error: "Email and Password are required" });
  }

  try {
    connection = await db.getConnection();

    const [rows] = await connection.query(
      "SELECT * FROM admin WHERE phone_number = ?",
      [phone_number]
    );

    if (rows.length === 0) {
      return res
        .status(401)
        .json({ error: "Invalid phone_number or password" });
    }

    const user = rows[0];

    // Password verification with bcrypt
    const isMatch = await bcrypt.compare(password_hash, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // JWT token generation
    const token = jwt.sign(
      { admin_id: user.admin_id, phone_number: user.phone_number },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Success response
    return res.status(200).json({
      status: true,
      message: "Login successful",
      token,
      user: {
        admin_id: user.admin_id,
        name: user.name,
        phone_number: user.phone_number,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    if (connection) connection.release();
  }
}

export async function register(req, res) {
  const { name, phone_number, password_hash } = req.body;
  let connection;

  if (!name || !phone_number || !password_hash) {
    return res.status(400).json({
      status: "false",
      message: "all fields are required",
    });
  }

  try {
    connection = await db.getConnection();

    const [result] = await connection.query(
      `insert into admin (name,phone_number,password_hash)
        values(?,?,?)`,
      [name, phone_number, password_hash]
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        status: "True",
        message: "Registration Sucessful",
        registerData: result.insertId,
      });
    } else {
      return res.status(500).json({
        status: "false",
        message: "error in doing Registration ",
      });
    }
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({
      status: "false",
      message: "error in doing Registration ",
    });
  } finally {
    if (connection) connection.release();
  }
}

export async function getTotalActiveUsers(req, res) {
  let connection;

  try {
    connection = await db.getConnection();

    const [patientsResult] = await connection.query(
      `select count(patient_id) AS total_active_users
      from patients `
    );

    if (patientsResult.length > 0) {
      return res.status(200).json({
        status: "True",
        message: "total active users get successfully",
        totalusers: patientsResult,
      });
    } else {
      return res.status(500).json({
        status: "false",
        message: "error in getting total active users",
      });
    }
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({
      status: "false",
      message: "error in ",
    });
  } finally {
    if (connection) connection.release();
  }
}

export async function getDoctorsDetails(req, res) {
  let connection;

  try {
    connection = await db.getConnection();

    const [doctorsResult] = await connection.query(
      `select 
      d.doctor_id,
      d.name,
      d.gender,
      d.phone_number,d.qualification,
      s.specialization_name,
      d.practice_start_year
      from doctors d
      join specialization s on s.specialization_id = d.specialization_id`
    );

    if (doctorsResult.length > 0) {
      return res.status(200).json({
        status: "True",
        message: "doctors details get successfully",
        totalusers: doctorsResult,
      });
    } else {
      return res.status(500).json({
        status: "false",
        message: "error in getting total active users",
      });
    }
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({
      status: "false",
      message: "error in ",
    });
  } finally {
    if (connection) connection.release();
  }
}

export async function getAppointmentsDetailsByDoctorId(req, res) {
  const { doctor_id } = req.query;
  let connection;

  try {
    connection = await db.getConnection();

    const [doctorsResult] = await connection.query(
      `select p.patient_id,
        a.doctor_id,
        p.name,
        p.gender,
        p.phone_number,
       CONCAT(
       DATE_FORMAT(a.booking_date, '%b %e'),
      '-',
       DATE_FORMAT(dt.hour_24_format, '%l:%i %p')
       ) AS Appointment,
        a.status
        from patients p
        LEFT JOIN appointments a on p.patient_id = a.appointment_id
        LEFT JOIN dim_time dt on dt.time_id = a.time_id
      `
    );

    if (doctorsResult.length > 0) {
      return res.status(200).json({
        status: "True",
        message: "patient details get successfully",
        totalusers: doctorsResult,
      });
    } else {
      return res.status(500).json({
        status: "false",
        message: "error in getting total active users",
      });
    }
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({
      status: "false",
      message: "error in ",
    });
  } finally {
    if (connection) connection.release();
  }
}

export async function getPatientProfileByPatientId(req, res) {
  const { patient_id } = req.query;
  let connection;
  try {
    connection = await db.getConnection();
    if (!patient_id) {
      return res.status(400).json({
        status: false,
        message: 'patient_id is required',
      });
    }

    //sql query to find details of a patient

    let patientProfileQuery = `
      SELECT 
            p.name,
            p.phone_number,
            p.email,
            DATE_FORMAT(p.date_of_birth, '%d-%m-%Y') AS date_of_birth,
           	concat(round(p.height,0),' Cm') as height,
            concat(round(p.weight,0),' Kg') as weight,
            p.gender,
            p.blood_group,
            i.image_url,
			p.allergies,
			p.current_medications,
			p.chronic_illnesses,
			p.lifestyle_habbits
            from patients p
            LEFT JOIN images i ON (p.patient_id = i.entity_id AND i.entity_type = 'patient' AND i.file_type = 'profile_photo')
            where p.patient_id=?`;

    let patientProfileParam = [patient_id];
    const [patientProfileResult] = await connection.query(patientProfileQuery, patientProfileParam);
    if (patientProfileResult.length > 0) {
      const imageUrls = patientProfileResult.map((pateint) => pateint.image_url).filter((url) => url);
      const signedUrls = await s3.getPresignedS3DownloadURIsHelper(imageUrls);

      patientProfileResult.forEach((pateint) => {
        const imageUrl = pateint.image_url;
        const signedUrl = signedUrls.find((urlObj) => urlObj.fileName === imageUrl);
        if (signedUrl) {
          pateint.signedImageUrl = signedUrl.presignedUrl; // Add signed URL to patient profile
        }
      });
    }
    return res.status(200).json({
      status: true,
      message: 'patient profile details found',
      data: patientProfileResult,
    });
  } catch (error) {
    console.error('error getting details', error);
    return res.status(500).json({
      status: false,
      message: 'Something went wrong',
    });
  } finally {
    if (connection) connection.release();
  }
}

export async function upsertAdminDetails(req,res) {
  const{admin_id,name,password_hash} =req.body
  let connection;

  try {
    connection = await db.getConnection()

    if(admin_id){
    const [updateAdmin] = await connection.query(
  `update admin set name = ?,password_hash = ? where admin_id = ?`,[name,password_hash,admin_id])

    if (updateAdmin.affectedRows>0) {
      return res.status(200).json({
        status: "True",
        message: "admin details updated successfully",
        updatedId: admin_id
      });
    }
  }
  else{
     const [insertAdmin] = await connection.query(
  `insert into admin (name,password_hash) values(?,?)`,[name,password_hash])

    if (insertAdmin.affectedRows>0) {
      return res.status(200).json({
        status: "True",
        message: "admin details inserted successfully",
        totalusers: insertAdmin.insertId,
      });
    }
   }
  }catch (error) {
    console.error("error", error);
    return res.status(500).json({
      status: "false",
      message: "error in ",
    });
  } finally {
    if (connection) connection.release();
  }
}

export async function adminLogout(params) {
  
}
