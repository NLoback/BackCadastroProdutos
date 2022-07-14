import { Router } from "express";

import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import authMiddleware from "./middlewares/authMiddleware";
import ProductController from "./controllers/ProductController";



const Routes = Router();
/* rotas do usuario */

Routes.post('/auth', AuthController.authenticate);
Routes.get('/users', authMiddleware, UserController.show);
/* rotas produtos */
Routes.post('/product', ProductController.create);
Routes.delete("/product/:id", ProductController.delete);
Routes.get("/product", ProductController.index);
Routes.put("/product/:id", ProductController.update);

export default Routes;


