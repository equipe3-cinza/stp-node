import { prisma } from "../prisma";

class MedicoService {

    async create(name: string, crm: string, telefone: string, unidadeHospitalar: string, papel: string, solicitacoes: string[],
        transferenciasOrigem: string[], transferenciasDestino: string[], transferenciasRegulador: string[]
    ) {
        try {
            const medico = await prisma.medico.create({
                data: {
                    name,
                    crm,
                    telefone,
                    unidadeHospitalar,
                    papel,
                    solicitacoes,
                    transferenciasOrigem,
                    transferenciasDestino,
                    transferenciasRegulador
                }
            });
            return medico;
        } catch (error) {
            console.error(`Error create Medico: ${error}`);
            throw error;
        }
    }


    async getAll() {
        try {
            const medicos = await prisma.medico.findMany();
            return medicos;
        } catch (error) {
            console.error(`Error getting Medicos ${error}`);
            throw error;
        }
    }

    async getById(id: string) {
        try {
            const medico = await prisma.medico.findUnique({
                where: { id }
            });
            return medico;
        } catch (error) {
            console.error(`Error finding Medico by id ${error}`);
            throw error;
        }
    }

    async update(id: string, name: string, crm: string, telefone: string, unidadeHospitalar: string, papel: string, solicitacoes: string[],
        transferenciasOrigem: string[], transferenciasDestino: string[], transferenciasRegulador: string[]) {
        try {
            const medico = await prisma.medico.update({
                where: { id },
                data: {
                    name,
                    crm,
                    telefone,
                    unidadeHospitalar,
                    papel,
                    solicitacoes,
                    transferenciasOrigem,
                    transferenciasDestino,
                    transferenciasRegulador
                }
            });
            return medico;
        } catch (error) {
            console.error(`Error updating Medico ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await prisma.medico.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.error(`Error delete Medico ${error}`);
            throw error;
        }
    }
}

export { MedicoService }