const express = require("express");
const app = express();
const router = require("./src/routes/api");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const mongodb = require("./src/database/DBConnect");
//Security Middleware import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const cors = require("cors");
//req rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(hpp());
app.use(xss());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
mongodb();
app.use("/api/v1", router);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with your frontend domain
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

//health route
app.use("/health", (req, res) => {
  res.status(200).json({ Message: "Success" });
});
app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;
