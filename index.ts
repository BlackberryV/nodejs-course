import express from "express";
import mongoose from "mongoose";

import signatureRouter from './routes/signatures';
import petitionRouter from './routes/petition';
import userRouter from './routes/user';

const app = express();

const port = 5001;
const db = "mongodb+srv://node:node@nodejs-course.85duhz1.mongodb.net/";

app.use(express.json());
app.use(signatureRouter);
app.use(userRouter);
app.use(petitionRouter);

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

mongoose
  .connect(db)
  .then(() => console.log("db connected"))
  .catch((e) => console.log("db failed", e));
1;

