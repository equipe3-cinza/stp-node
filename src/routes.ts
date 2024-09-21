import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PacienteController } from "./controllers/PacienteController";


const routes = Router();
const userController = new UserController();
const pacienteController = new PacienteController();


const path = "/api";

routes.get(`${path}/user`, userController.getAll);
routes.post(`${path}/user`, userController.create);
routes.get(`${path}/:id`, userController.getById);
routes.delete(`${path}/:id`, userController.verifyIfExists, userController.delete);
routes.put(`${path}/:id`, userController.update);
//routes.post("/auth", authController.authenticate);

routes.get(`${path}/paciente`, pacienteController.getAll);
routes.post(`${path}/paciente`, pacienteController.create);
routes.get(`${path}/paciente/:id`, pacienteController.getById);
routes.delete(`${path}/paciente/:id`, pacienteController.verifyIfExists, pacienteController.delete);
routes.put(`${path}/paciente/:id`, pacienteController.update);



export { routes };
