const validateInput = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  if (!email.includes("@") || !email.includes(".") || !email.includes("com") ) {
  return res.status(400).json({ message: "Invalid email format" });
  }

  if (password.length !==8) {
    return res.status(400).json({ message: "Password must be at exactly 8 characters" });
  }

  next();
};

module.exports = validateInput;
