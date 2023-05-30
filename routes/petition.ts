import { Router } from 'express';

import {
  create,
  getEntityById,
  getPetitions,
  updatePetition,
  deletePetition,
} from '../controllers/petition';

const router = Router();

// GET /api/v1/entity
router.get('/entity', getPetitions);

// GET /api/v1/entity/:id
router.get('/entity/:id', getEntityById);

// POST /api/v1/entity
router.post('/entity', create);

// DELETE /api/v1/entity/:id
router.delete('/entity/:id', deletePetition);

// PUT /api/v1/entity/:id
router.put('/entity/:id', updatePetition);

export default router;
