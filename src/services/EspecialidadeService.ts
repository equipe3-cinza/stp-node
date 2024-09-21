import { prisma } from "../prisma";

class EspecialidadeService {

    async create(nome: string, descricao: string, unidadesHospitalares: string[], solicitacoes: string[]) {
        try {
            const especialidade = await prisma.especialidade.create({
                data: {
                    nome,
                    descricao,
                    unidadesHospitalares,
                    solicitacoes
                }
            });
            return especialidade;
        } catch (error) {
            console.error(`Error create Especialidade: ${error}`);
            throw error;
        }
    }


    async getAll() {
        try {
            const especialidades = await prisma.especialidade.findMany();
            return especialidades;
        } catch (error) {
            console.error(`Error getting Especialidade ${error}`);
            throw error;
        }
    }

    async getById(id: string) {
        try {
            const especialidade = await prisma.especialidade.findUnique({
                where: { id }
            });
            return especialidade;
        } catch (error) {
            console.error(`Error finding Especialidade by id ${error}`);
            throw error;
        }
    }

    async update(id: string, nome: string, descricao: string, unidadesHospitalares: string[], solicitacoes: string[]) {
        try {
            const especialidade = await prisma.especialidade.update({
                where: { id },
                data: {
                    nome,
                    descricao,
                    unidadesHospitalares,
                    solicitacoes
                }
            });
            return especialidade;
        } catch (error) {
            console.error(`Error updating Especialidade ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await prisma.especialidade.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.error(`Error delete especialidade ${error}`);
            throw error;
        }
    }
}

export { EspecialidadeService }