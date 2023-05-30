import { body } from "express-validator";

export const petitionValidation = [
  body("title", "too short title").isLength({ min: 1 }).isString(),
  body("text", "too short title").isLength({ min: 1 }).isString(),
  body("requiredSignatures").isNumeric(),
];
