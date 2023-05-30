import { Response, Request } from "express";
import { validationResult } from "express-validator";

import { UserModel } from "../models/User";

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res.status(404).json({ error: "wrong email or password" });
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json("sth went wrong");
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    const doc = new UserModel(req.body);

    const user = await doc.save();

    return res.status(201).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json("sth went wrong");
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json("sth went wrong");
  }
};

export const getUserByPassportId = async (req: Request, res: Response) => {
  try {
    const passportId = req.params.passportId;

    console.log(req.params);

    const user = await UserModel.findOne({ passportId });

    if (!user) return res.status(404).json({ message: "user not found" });

    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json("sth went wrong");
  }
};
