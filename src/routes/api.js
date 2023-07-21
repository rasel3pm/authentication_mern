const express = require("express");
const {
  createAccount,
  allUser,
  loginAccount,
} = require("../controller/UserController");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const router = express.Router();

//manage user router
router.post("/create-acc", createAccount);
router.post("/login", loginAccount);
router.get("/users", allUser);

module.exports = router;
