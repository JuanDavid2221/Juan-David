import { Request, Response } from "express";
import UserRepository from '../repositories/UserRepository';
import Auth from '../Dto/AuthDto';
import generateToken from '../helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();


let auth = async (req: Request, res: Response) => {
  try {
    const { nombres, password } = req.body;
    const sel = await UserRepository.sel(new Auth(nombres, password));
    if (sel.logged) {
      return res.status(200).json({
        status: sel.status,
        token: generateToken({id: 34}, process.env.SECRET_KEY, 5)
      });
    }
    return res.status(401).json({
      status: sel.status
    });
  } catch (error) {
    console.log(error);
  }
}

export default auth;