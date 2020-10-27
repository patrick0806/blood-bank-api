import {Router} from 'express';
import UserController from './controller/UserController';

const routes = Router();

routes.get('',UserController.getAll);

export default routes;