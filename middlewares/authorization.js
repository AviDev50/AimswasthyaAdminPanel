import jwt from "jsonwebtoken";

const authorization = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Access denied. No token provided."
    });
  }

  try {
    const decoded = jwt.verify(token, "AVISECRETKEY123");
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

export default authorization;
