import { prisma } from "../../../prisma";
import { TransferenciaDTO } from "../dtos/Transferencia.dto";

class TransferenciaService {
    async create(transferenciaDTO: TransferenciaDTO) {
        try {
            const transferencia = await prisma.transferencia.create({
                data: transferenciaDTO,
            });
            return transferencia;
        } catch (error) {
            console.error(`Error creating transferencia: ${error}`);
            throw error;
        }
    }

    async update(id: string, transferenciaDTO: TransferenciaDTO) {
        try {
            const transferencia = await prisma.transferencia.update({
                where: { id },
                data: transferenciaDTO,
            });
            return transferencia;
        } catch (error) {
            console.error(`Error updating transferencia: ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            const transferencia = await prisma.transferencia.delete({
                where: { id },
            });
            return transferencia;
        } catch (error) {
            console.error(`Error deleting transferencia: ${error}`);
            throw error;
        }
    }

    async findById(id: string) {
        try {
            const transferencia = await prisma.transferencia.findUnique({
                where: { id },
            });
            return transferencia;
        } catch (error) {
            console.error(`Error finding transferencia by id: ${error}`);
            throw error;
        }
    }

    async findAll() {
        try {
            const transferencias = await prisma.transferencia.findMany();
            return transferencias;
        } catch (error) {
            console.error(`Error finding all transferencias: ${error}`);
            throw error;
        }
    }
}

export { TransferenciaService };