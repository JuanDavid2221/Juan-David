import express from "express";
import authController from '../controllers/auth-controller';
import { validadorauth, validator } from "../middleware/auth-validator";  // Importa correctamente

const router = express.Router();

// Aplica primero el middleware de validación y luego el validadorauth
router.post('/', validadorauth, validator, authController);

export default router;
