import { prisma } from "../prisma";

class PacienteService {

    async create(cpf: string, nome: string, telefone: string, email: string, endereco: string,
        tipoSanguineo: string, prontuario: string, solicitacoes: string[], transferencias: string[]) {
        try {
            const paciente = await prisma.paciente.create({
                data: {
                    cpf,
                    nome,
                    telefone,
                    email,
                    endereco,
                    tipoSanguineo,
                    prontuario,
                    solicitacoes,
                    transferencias
                }
            });
            return paciente;
        } catch (error) {
            console.error(`Error create paciente: ${error}`);
            throw error;
        }
    }


    async getAll() {
        try {
            const pacientes = await prisma.paciente.findMany({
                orderBy: {
                    nome: "asc"
                }
            });
            return pacientes;
        } catch (error) {
            console.error(`Error getting pacientes ${error}`);
            throw error;
        }
    }

    async getById(id: string) {
        try {
            const paciente = await prisma.paciente.findUnique({
                where: { id }
            });
            return paciente;
        } catch (error) {
            console.error(`Error finding paciente by id ${error}`);
            throw error;
        }
    }

    async update(id: string, cpf: string, nome: string, telefone: string, email: string, endereco: string,
        tipoSanguineo: string, prontuario: string, solicitacoes: string[], transferencias: string[]) {
        try {
            const paciente = await prisma.paciente.update({
                where: { id },
                data: {
                    cpf,
                    nome,
                    telefone,
                    email,
                    endereco,
                    tipoSanguineo,
                    prontuario,
                    solicitacoes,
                    transferencias
                }
            });
            return paciente;
        } catch (error) {
            console.error(`Error updating paciente ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await prisma.paciente.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.error(`Error delete paciente ${error}`);
            throw error;
        }
    }
}

export { PacienteService }