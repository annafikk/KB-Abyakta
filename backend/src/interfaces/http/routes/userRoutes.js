import express from 'express';
import { registerUserHandler, loginUserHandler } from '../controllers/UserController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { isAdminMiddleware } from '../middleware/isAdminMiddleware.js';

const router = express.Router();

router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome!', user: req.user });
});

export default router;
