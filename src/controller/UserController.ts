import { Request, Response } from "express";

class UserController{

    async getAll(req:Request,resp:Response){
        return resp.json({message:'Hello World'})
    }
}

export default new UserController();