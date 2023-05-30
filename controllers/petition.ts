import { Request, Response } from "express";
import { PetitionModel } from "../models/Petition";

export const create = async (req: Request, res: Response) => {
  try {
    const doc = new PetitionModel({
      title: req.body.title,
      text: req.body.text,
      requiredSignatures: req.body.requiredSignatures,
      creator: req.body.creator,
    });

    const petition = await doc.save();

    return res.status(201).json(petition);
  } catch (e) {
    return res.status(500).json("sth went wrong");
  }
};
