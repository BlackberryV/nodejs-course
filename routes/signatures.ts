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
router.get('/api/v1/signature', getSignatures);

// GET /api/v1/signature/:id
router.get('/api/v1/signature/:id', getSignatureById);

// POST /api/v1/signature
router.post('/api/v1/signature', createSignature);

// DELETE /api/v1/signature/:id
router.delete('/api/v1/signature/:id', deleteSignature);

// PUT /api/v1/signature/:id
router.put('/api/v1/signature/:id', updateSignature);

export default router;
