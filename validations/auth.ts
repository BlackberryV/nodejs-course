import { body } from "express-validator";

export const registerValidation = [
  body("email", "wrong email").isEmail(),
  body("password", "min length is 5").isLength({ min: 5 }),
  body("passportId", "length should be 7").isLength({ min: 7, max: 7 }),
  body("fullname", "min length is 3").isLength({ min: 3 }),
];

export const loginValidation = [
  body("email", "wrong email").isEmail(),
  body("password", "min length is 5").isLength({ min: 5 }),
];
