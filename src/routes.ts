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
const transferenciaController = new TransferenciaController();
const unidadeHospitalarController = new UnidadeHospitalarController();
const documentoTransferenciaController = new DocumentoTransferenciaController();
const enderecoController = new EnderecoController();
const medicamentoController = new MedicamentoController();

const path = "/api";

const defineRoutes = (controller: any, routeName: string) => {
    routes.get(`${path}/${routeName}`, controller.getAll);
    routes.post(`${path}/${routeName}`, controller.create);
    routes.get(`${path}/${routeName}/:id`, controller.getById);
    routes.delete(`${path}/${routeName}/:id`, controller.verifyIfExists, controller.delete);
    routes.put(`${path}/${routeName}/:id`, controller.update);
};

defineRoutes(userController, "user");
defineRoutes(pacienteController, "paciente");
defineRoutes(medicoController, "medico");
defineRoutes(especialidadeController, "especialidade");
defineRoutes(prontuarioController, "prontuario");
defineRoutes(unidadeHospitalarController, "unidade");
defineRoutes(documentoTransferenciaController, "documento");
defineRoutes(enderecoController, "endereco");
defineRoutes(medicamentoController, "medicamento");
defineRoutes(transferenciaController, "transferencia");

export { routes };
