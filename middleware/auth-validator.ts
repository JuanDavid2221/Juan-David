import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validadorauth = [
  check('nombre').isLength({ min: 1, max: 255 }).withMessage('El nombre debe tener entre 1 y 255 caracteres'),
  check('password').isLength({ min: 8, max: 15 }).withMessage('La contraseña debe tener entre 8 y 15 caracteres')
];

function validator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

export {
  validadorauth,
  validator
};
