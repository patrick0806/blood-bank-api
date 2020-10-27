import {Router} from 'express';
import UserController from './controller/UserController';

const routes = Router();

routes.get('',UserController.getAll);
routes.post('/users',UserController.createUser);
export default routes;