import express from 'express';
import { validatorParams, validator } from '../middleware/register-validator';
import registerController from '../controllers/register-controller';

const router = express.Router();

// Aplicar las validaciones y luego pasar al controlador
router.post('/', validatorParams, validator, registerController);

export default router;
