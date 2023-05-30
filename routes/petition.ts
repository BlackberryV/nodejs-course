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
router.get('/api/v1/petition', getPetitions);

// GET /api/v1/entity/:id
router.get('/api/v1/petition/:id', getEntityById);

// POST /api/v1/entity
router.post('/api/v1/petition', create);

// DELETE /api/v1/entity/:id
router.delete('/api/v1/petition/:id', deletePetition);

// PUT /api/v1/entity/:id
router.put('/api/v1/petition/:id', updatePetition);

export default router;
