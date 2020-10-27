import {createConnection} from "typeorm";

createConnection().then(()=>console.log('conectado')).catch(error => console.log(error));