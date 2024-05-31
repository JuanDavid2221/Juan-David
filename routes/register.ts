import express from 'express';
import { validatorregistro, validator } from '../middleware/register-validator';
import registerController from '../controllers/register-controller';

const router = express.Router();

router.post('/', validatorregistro, validator, registerController);

export default router;
