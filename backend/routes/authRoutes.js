import express from 'express';
import { check } from 'express-validator';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', [
    check('email').isEmail().withMessage('Valid email required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], signup);

router.post('/login', [
    check('email').isEmail(),
    check('password').exists()
], login);

export default router;