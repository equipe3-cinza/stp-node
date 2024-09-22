import { Router } from "express";
import { EspecialidadeController } from "./end-points/especialidade/controllers/EspecialidadeController";
import { MedicoController } from "./end-points/medico/controllers/MedicoController";
import { PacienteController } from "./end-points/paciente/controllers/PacienteController";
import { UserController } from "./end-points/user/controllers/UserController";


const routes = Router();
const userController = new UserController();
const pacienteController = new PacienteController();
const medicoController = new MedicoController();
const especialidadeController = new EspecialidadeController();
const prontuarioController = new PacienteController();


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

routes.get(`${path}/especialidade`, especialidadeController.getAll);
routes.post(`${path}/especialidade`, especialidadeController.create);
routes.get(`${path}/especialidade/:id`, especialidadeController.getById);
routes.delete(`${path}/especialidade/:id`, especialidadeController.verifyIfExists, especialidadeController.delete);
routes.put(`${path}/especialidade/:id`, especialidadeController.update);

routes.get(`${path}/prontuario`, prontuarioController.getAll);
routes.post(`${path}/prontuario`, prontuarioController.create);
routes.get(`${path}/prontuario/:id`, prontuarioController.getById);
routes.delete(`${path}/prontuario/:id`, prontuarioController.verifyIfExists, prontuarioController.delete);
routes.put(`${path}/prontuario/:id`, prontuarioController.update);

export { routes };
