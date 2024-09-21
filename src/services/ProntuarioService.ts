import { prisma } from "../prisma";

class ProntuarioService {

    async create(classificacao: string, medicamentosAtuais: string[], paciente: string) {
        try {
            const prontuario = await prisma.prontuario.create({
                data: {
                    classificacao,
                    medicamentosAtuais,
                    paciente
                }
            });
            return prontuario;
        } catch (error) {
            console.error(`Error create Prontuario: ${error}`);
            throw error;
        }
    }


    async getAll() {
        try {
            const prontuarios = await prisma.prontuario.findMany();
            return prontuarios;
        } catch (error) {
            console.error(`Error getting Prontuario ${error}`);
            throw error;
        }
    }

    async getById(id: string) {
        try {
            const prontuario = await prisma.prontuario.findUnique({
                where: { id }
            });
            return prontuario;
        } catch (error) {
            console.error(`Error finding Prontuario by id ${error}`);
            throw error;
        }
    }

    async update(id: string, classificacao: string, medicamentosAtuais: string[], paciente: string) {
        try {
            const prontuario = await prisma.prontuario.update({
                where: { id },
                data: {
                    classificacao,
                    medicamentosAtuais,
                    paciente
                }
            });
            return prontuario;
        } catch (error) {
            console.error(`Error updating Prontuario ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await prisma.prontuario.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.error(`Error delete Prontuario ${error}`);
            throw error;
        }
    }
}

export { ProntuarioService }