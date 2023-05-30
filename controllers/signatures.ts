import { Request, Response } from "express";
import { SignaturesModel } from "../models/Signatures";
import { validationResult } from 'express-validator';

export const createSignature = async (req: Request, res: Response) => {
    try {
      const { users, petition, text } = req.body;
  
      const doc = new SignaturesModel({
        users,
        petition,
        text,
      });
  
      const signature = await doc.save();
  
      return res.status(201).json(signature);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
  
  export const getSignatureById = async (req: Request, res: Response) => {
    try {
      const signatureId = req.params.id;
  
      const signature = await SignaturesModel.findById(signatureId);
  
      if (!signature) return res.status(404).json({ message: "Signature not found" });
  
      return res.status(200).json(signature);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
  
  export const getSignatures = async (req: Request, res: Response) => {
    try {
      const filters = req.query;
  
      if (Object.keys(filters).length > 0) {
        const signatures = await getSignaturesWithFilter(filters);
        return res.status(200).json(signatures);
      } else {
        const signatures = await getAllSignatures();
        return res.status(200).json(signatures);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
  
  const getAllSignatures = async () => {
    return SignaturesModel.find();
  };
  
  const getSignaturesWithFilter = async (filters: any) => {
    return SignaturesModel.find(filters);
  };
  
  export const deleteSignature = async (req: Request, res: Response) => {
    try {
      const signatureId = req.params.id;
  
      await SignaturesModel.findByIdAndRemove(signatureId);
  
      return res.status(200).json({ message: 'Signature deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
  
  export const updateSignature = async (req: Request, res: Response) => {
    try {
      const signatureId = req.params.id;
      const { users, petition, text } = req.body;
  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      await SignaturesModel.findByIdAndUpdate(signatureId, { users, petition, text });
  
      return res.status(200).json({ message: 'Signature updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
