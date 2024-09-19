import { Router } from "express";
import { UserController } from "./controllers/UserController";


const routes = Router();
const userController = new UserController();


const path = "/api";

routes.get(`${path}/user`, userController.getAll);
routes.post(`${path}/user`, userController.create);
routes.get(`${path}/:id`, userController.getById);
routes.delete(`${path}/:id`, userController.verifyIfExists, userController.delete);
routes.put(`${path}/:id`, userController.update);
//routes.post("/auth", authController.authenticate);



export { routes };
