import { Router } from "express";

import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import authMiddleware from "./middlewares/authMiddleware";

const Routes = Router();

Routes.post('/users', UserController.store);
Routes.post('/auth', AuthController.authenticate);
Routes.get('/users', authMiddleware, UserController.index);

export default Routes;


