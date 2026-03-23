const express = require("express");
const router = express.Router();
const { registerUser, getAllUsers } = require("../controllers/user.controller");
const { validateApiKey } = require("../middlewares/auth.middleware");

router.post("/register", registerUser);
router.get("/all", validateApiKey, getAllUsers);

module.exports = router;
