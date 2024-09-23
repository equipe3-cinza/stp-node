import { Router } from "express";
import { EspecialidadeController } from "./end-points/especialidade/controllers/EspecialidadeController";
import { MedicoController } from "./end-points/medico/controllers/MedicoController";
import { PacienteController } from "./end-points/paciente/controllers/PacienteController";
import { UserController } from "./end-points/user/controllers/UserController";
import { TransferenciaController } from "./end-points/transferencia/controllers/TransferenciaController";
import { UnidadeHospitalarController } from "./end-points/unidade-hospitalar/controllers/UnidadeHospitalarController";
import { DocumentoTransferenciaController } from "./end-points/documento-transferencia/controllers/DocumentoTransferenciaController";
import { EnderecoController } from "./end-points/endereco/controllers/EnderecoController";
import { MedicamentoController } from "./end-points/medicamento/controllers/MedicamentoController";
import { ProntuarioController } from "./end-points/prontuario/controllers/ProntuarioController";

const routes = Router();
const userController = new UserController();
const pacienteController = new PacienteController();
const medicoController = new MedicoController();
const especialidadeController = new EspecialidadeController();
const prontuarioController = new ProntuarioController();
const transferenciaController =new TransferenciaController();
const unidadeHospitalarController =new UnidadeHospitalarController();
const documentoTransferenciaController = new DocumentoTransferenciaController();
const enderecoController =new EnderecoController();
const medicamentoController = new MedicamentoController();

const path = "/api";

routes.get(`${path}/user`, userController.getAll);
routes.post(`${path}/user`, userController.create);
routes.get(`${path}/user/:id`, userController.getById);
routes.delete(`${path}/user/:id`, userController.verifyIfExists, userController.delete);
routes.put(`${path}/user/:id`, userController.update);
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

routes.get(`${path}/unidade`, unidadeHospitalarController.findAll); //padronizar getAll/findALL
routes.post(`${path}/unidade`, unidadeHospitalarController.create);
routes.get(`${path}/unidade/:id`, unidadeHospitalarController.findById); // padronizar findById/getById
routes.delete(`${path}/unidade/:id`, unidadeHospitalarController.delete); // IMPLEMENTAR verifyIfExists,
routes.put(`${path}/unidade/:id`, unidadeHospitalarController.update);

routes.get(`${path}/documento`, documentoTransferenciaController.findAll);
routes.post(`${path}/documento`, documentoTransferenciaController.create);
routes.get(`${path}/documento/:id`, documentoTransferenciaController.findById);
routes.delete(`${path}/documento/:id`, documentoTransferenciaController.delete);
routes.put(`${path}/documento/:id`, documentoTransferenciaController.update);

routes.get(`${path}/endereco`, enderecoController.getAll);
routes.post(`${path}/endereco`, enderecoController.create);
routes.get(`${path}/endereco/:id`, enderecoController.getById);
routes.delete(`${path}/endereco/:id`, enderecoController.verifyIfExists, enderecoController.delete);
routes.put(`${path}/endereco/:id`, enderecoController.update);

routes.get(`${path}/medicamento`, medicamentoController.findAll);
routes.post(`${path}/medicamento`, medicamentoController.create);
routes.get(`${path}/medicamento/:id`, medicamentoController.findById);
routes.delete(`${path}/medicamento/:id`, medicamentoController.delete);
routes.put(`${path}/medicamento/:id`, medicamentoController.update);

routes.get(`${path}/transferencia`, transferenciaController.getAll);
routes.post(`${path}/transferencia`, transferenciaController.create);
routes.get(`${path}/transferencia/:id`, transferenciaController.findById);
routes.delete(`${path}/transferencia/:id`, transferenciaController.delete);
routes.put(`${path}/transferencia/:id`, transferenciaController.update);



export { routes };
