import { Request, Response } from "express";
import { PetitionModel } from "../models/Petition";
import { validationResult } from 'express-validator';

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
export const getEntityById = async (req: Request, res: Response) => {
  try {
    const entityId = req.params.id;

    const entity = await PetitionModel.findById(entityId);

    if (!entity) return res.status(404).json({ message: "Entity not found" });

    return res.status(200).json(entity);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};


export const getPetitions = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const itemsPerPage = parseInt(req.query.items_per_page as string) || 10;
    const filters = req.query;

    if (filters.hasOwnProperty("page")) {
      delete filters.page;
    }
    
    if (filters.hasOwnProperty("items_per_page")) {
      delete filters.items_per_page;
    }

   
    if (Object.keys(filters).length > 0  ) {
      const filteredPetitions = await getPetitionsWithFilter(filters);
      const paginatedPetitions = paginate(filteredPetitions, page, itemsPerPage);
      return res.status(200).json(paginatedPetitions);
    } else {
      const petitions = await getAllPetitions();
      const paginatedPetitions = paginate(petitions, page, itemsPerPage);
      return res.status(200).json(paginatedPetitions);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

const paginate = (items: any[], page: number, itemsPerPage: number) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return {
    items: paginatedItems,
    currentPage: page,
    totalPages,
  };
};

const getAllPetitions = async () => {
  return PetitionModel.find();
};

const getPetitionsWithFilter = async (filters: any) => {
  return PetitionModel.find(filters);
};






export const deletePetition = async (req: Request, res: Response) => {
  try {
    const petitionId = req.params.id;

    await PetitionModel.findByIdAndRemove(petitionId);

    return res.status(200).json({ message: 'Petition deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const updatePetition = async (req: Request, res: Response) => {
  try {
    const petitionId = req.params.id;
    const { title, text, requiredSignatures, creator } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await PetitionModel.findByIdAndUpdate(petitionId, { title, text, requiredSignatures, creator });

    return res.status(200).json({ message: 'Petition updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};