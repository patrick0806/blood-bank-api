import { getRepository } from "typeorm";
import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { User } from "../models/User";
class UserController {
  async getAll(req: Request, resp: Response) {
    return resp.json({ userID: req.userId,message: "Hello World" });
  }

  async createUser(req:Request,resp:Response){
    const repository = getRepository(User);  

    const{email,password} = req.body;
      const existUser = await repository.findOne({where:{email}});
      if(existUser){
          return resp.sendStatus(409);
      }

      const user = {email,password};
      user.password = await bcrypt.hash(password, 10);
      const result = await repository.save(user);
      return resp.json(result);
  }
}

export default new UserController();
