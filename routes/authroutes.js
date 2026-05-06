const express = require("express");
const { signup, login } = require("../controller/authcontroler");
const validateInput = require("../middleware/validation");


const router = express.Router();

router.post("/signup", validateInput, signup);
router.post("/login", validateInput, login);



module.exports = router;