import { Router } from 'express';
import { validationResult } from 'express-validator';
import {
  login,
  register,
  getUsers,
  getUserByPassportId,
  updateUser,
  deleteUser,
} from '../controllers/user';

const router = Router();

// POST /api/v1/user/login
router.post('/user/login', login);

// POST /api/v1/user/register
router.post('/user/register', register);

// GET /api/v1/user
router.get('/user', getUsers);

// GET /api/v1/user/:passportId
router.get('/user/:passportId', getUserByPassportId);

// DELETE /api/v1/user/:id
router.delete('/user/:id', deleteUser);

// PUT /api/v1/user/:id
router.put('/user/:id', updateUser);

export default router;