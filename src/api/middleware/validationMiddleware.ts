const { body } = require("express-validator");

function registerValidationFunction() {
  return [
    body("username")
      .trim()
      .isLength({
        min: 2,
        max: 20,
      })
      .withMessage("Username is required for new Registeration"),
    body("email").isEmail().withMessage("Email is required"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be in between 4 to 20 characters"),
  ];
}
function loginValidationFunction() {
  return [
    body("email").isEmail().withMessage("Email is required"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be in between 4 to 20 characters"),
  ];
}
function passwordResetValidationFunction() {
  return [
    body("email").isEmail().withMessage("Email is required"),
    body("newPassword")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be in between 4 to 20 characters"),
  ];
}

export default {
  registerValidationFunction,
  loginValidationFunction,
  passwordResetValidationFunction,
};
