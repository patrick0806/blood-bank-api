import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(()=>console.log('conectado')).catch(error => console.log(error));
