import { getRepository } from "typeorm";
import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { User } from "../models/User";
import jwt from 'jsonwebtoken';

class AuthController {
  async authenticate(req: Request, resp: Response) {
    const repository = getRepository(User);
    const {email,password} = req.body;

    const user = await repository.findOne({where:{email}});

    if(!user){
        return resp.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password,user.password);

    if(!isValidPassword){
        return resp.json({message:'Login ou senha invalida'})
    }

    const token = jwt.sign({id:user.id},'secret',{expiresIn:'1d'});
    delete user.password;
    return resp.json({user,token});
  }
}

export default new AuthController();
