const bcrypt = require("bcryptjs");
const db = require('../config/config-db.js');
const jwt = require('jsonwebtoken'); 
import Auth from "../Dto/AuthDto";   
import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
import {generateToken} from "../helpers/generateToken"


let auth = async (req: Request, res: Response) => {
    try {
        const {nombres, password} = req.body;
        const result : any= await UserRepository.sel(new Auth(nombres, password));
        if (result[0].length > 0){
            const isPasswordValid = await bcrypt.compare(password, result[0][0].password);
            if(isPasswordValid){
                return res.status(200).json({
                    status: "Succesful Authentication",
                    token:  await generateToken(nombres)
                })
            }   
        }
        return res.status(401).json({ 
            status: 'Incorrect username or password'
        });
    } catch (error) {
        console.log(error);
    }
}

export default auth;