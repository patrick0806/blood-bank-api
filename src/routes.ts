import {Router} from 'express';
import AuthMiddleware from './controller/middlewares/authMiddleware';
import AuthController from './controller/AuthController';
import UserController from './controller/UserController';
import authMiddleware from './controller/middlewares/authMiddleware';

const routes = Router();

routes.get('',UserController.getAll);
routes.post('/auth',AuthController.authenticate);
routes.post('/users',UserController.createUser);
routes.get('/users',authMiddleware,UserController.getAll);
export default routes;