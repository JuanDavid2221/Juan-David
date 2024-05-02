import jwt from "jsonwebtoken";
import { secretKey } from "../config/config-db"; 

export function generateToken(nombres: string): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign({ nombres }, secretKey, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        if (token) {
          resolve(token);
        } else {
          reject(new Error("Token not generated")); // O puedes manejar esto según tus necesidades
        }
      }
    });
  });
}
