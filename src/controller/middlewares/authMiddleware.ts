import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface TokenPayload{
    id:string;
    iat:number;
    exp:number;
}

export default function authMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
    const {authorization} = req.headers;
    if(!authorization){
        return resp.sendStatus(401);
    }

    const token = authorization.replace('Bearer','').trim();

    try {
        const data = jwt.verify(token,'secret');
        
        const{id} = data as TokenPayload;

        req.userId = id;
        return next();
    } catch (err) {
        return resp.json({message:'Ouve um erro'});
    }
}
