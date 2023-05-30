import express from "express";
import mongoose from "mongoose";
import * as UserController from "./controllers/user";
import * as PetitionsController from "./controllers/petition";
import { loginValidation, registerValidation } from "./validations/auth";
import { petitionValidation } from "./validations/petition";

const app = express();

const port = 5001;
const db = "mongodb+srv://node:node@nodejs-course.85duhz1.mongodb.net/";

app.use(express.json());

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

mongoose
  .connect(db)
  .then(() => console.log("db connected"))
  .catch((e) => console.log("db failed", e));
1;

// user endpoints
app.post("/user/login", loginValidation, UserController.login);
app.post("/user/register", registerValidation, UserController.register);
app.get("/user", UserController.getAllUsers);
app.get("/user/:passportId", UserController.getUserByPassportId);

// petition endpoints
app.post("/petition", petitionValidation, PetitionsController.create);
