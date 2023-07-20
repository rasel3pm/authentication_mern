// Middleware to check if the user is an admin
module.exports = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Unauthorized!! you must be have Admin access" });
  }
};
