import { body } from "express-validator";

export const voteValidation = [
      body("text", "too short title").isLength({ min: 1 }).isString(),
  ];