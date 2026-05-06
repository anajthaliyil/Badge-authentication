const validateInput = (req, res, next) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  if (!email.includes("@") || !email.includes(".") || !email.includes("com") ) {
  return res.status(400).json({ message: "Invalid email format" });
  }
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: "Password must contain both letters and numbers and  least 8 characters"
    });
  }

  next();
};
 
module.exports = validateInput;
