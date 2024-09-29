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
import { checkRole, jwtMiddleware } from "../middlewares/auth";

const routes = Router();
const userController = new UserController();
const pacienteController = new PacienteController();
const medicoController = new MedicoController();
const especialidadeController = new EspecialidadeController();
const prontuarioController = new ProntuarioController();
const transferenciaController = new TransferenciaController();
const unidadeHospitalarController = new UnidadeHospitalarController();
const documentoTransferenciaController = new DocumentoTransferenciaController();
const enderecoController = new EnderecoController();
const medicamentoController = new MedicamentoController();

const path = "/api";

const defineRoutes = (controller: any, routeName: string, roles: string[]) => {
    routes.get(`${path}/${routeName}`, jwtMiddleware, checkRole(roles), controller.getAll);
    routes.post(`${path}/${routeName}`, jwtMiddleware, checkRole(roles), controller.create);
    routes.get(`${path}/${routeName}/:id`, jwtMiddleware, checkRole(roles), controller.getById);
    routes.delete(`${path}/${routeName}/:id`, jwtMiddleware, checkRole(roles), controller.verifyIfExists, controller.delete);
    routes.put(`${path}/${routeName}/:id`, jwtMiddleware, checkRole(roles), controller.update);
};

defineRoutes(documentoTransferenciaController, "documento", ["ROLE_MEDICO", "ROLE_MEDICO_REGULADOR"]);
defineRoutes(enderecoController, "endereco", ["ROLE_USER"]);
defineRoutes(especialidadeController, "especialidade", ["ROLE_ADMIN"]);
defineRoutes(medicamentoController, "medicamento", ["ROLE_ADMIN"]);
defineRoutes(userController, "user", ["ROLE_USER"]);
defineRoutes(medicoController, "medico", ["ROLE_ADMIN"]);
defineRoutes(pacienteController, "paciente", ["ROLE_MEDICO", "ROLE_MEDICO_REGULADOR"]);
defineRoutes(prontuarioController, "prontuario", ["ROLE_MEDICO", "ROLE_MEDICO_REGULADOR"]);
defineRoutes(unidadeHospitalarController, "unidade", ["ROLE_ADMIN"]);
defineRoutes(transferenciaController, "transferencia", ["ROLE_MEDICO", "ROLE_MEDICO_REGULADOR"]);

export { routes };
