import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PacienteController } from "./controllers/PacienteController";
import { MedicoController } from "./controllers/MedicoController";


const routes = Router();
const userController = new UserController();
const pacienteController = new PacienteController();
const medicoController = new MedicoController();


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

routes.get(`${path}/medico`, medicoController.getAll);
routes.post(`${path}/medico`, medicoController.create);
routes.get(`${path}/medico/:id`, medicoController.getById);
routes.delete(`${path}/medico/:id`, medicoController.verifyIfExists, medicoController.delete);
routes.put(`${path}/medico/:id`, medicoController.update);


export { routes };
