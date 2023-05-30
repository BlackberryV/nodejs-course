import { Router } from 'express';

import {
  createSignature,
  getSignatureById,
  getSignatures,
  updateSignature,
  deleteSignature,
} from '../controllers/signatures';

const router = Router();

// GET /api/v1/signature
router.get('/signature', getSignatures);

// GET /api/v1/signature/:id
router.get('/signature/:id', getSignatureById);

// POST /api/v1/signature
router.post('/signature', createSignature);

// DELETE /api/v1/signature/:id
router.delete('/signature/:id', deleteSignature);

// PUT /api/v1/signature/:id
router.put('/signature/:id', updateSignature);

export default router;
