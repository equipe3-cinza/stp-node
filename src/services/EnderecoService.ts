import { prisma } from "../prisma";

class EnderecoService {

    async create(rua: string, numero: string, complemento: string, bairro: string,
        cidade: string, estado: string, pais: string, cep: string) {

        try {
            const endereco = await prisma.endereco.create({
                data: {
                    rua,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    estado,
                    pais, 
                    cep
                }
            });
            return endereco;
        } catch (error) {
            console.error(`Error create endereco: ${error}`);
            throw error;
        }
    }


    async getAll() {
        try {
            const enderecos = await prisma.endereco.findMany();
            return enderecos;
        } catch (error) {
            console.error(`Error getting enderecos ${error}`);
            throw error;
        }
    }

    async getById(id: string) {
        try {
            const endereco = await prisma.endereco.findUnique({
                where: { id }
            });
            return endereco;
        } catch (error) {
            console.error(`Error finding endereco by id ${error}`);
            throw error;
        }
    }

    async update(id: string, rua: string, numero: string, complemento: string, bairro: string,
        cidade: string, estado: string, pais: string, cep: string) {
        try {
            const endereco = await prisma.endereco.update({
                where: { id },
                data: {
                    rua,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    estado,
                    pais, 
                    cep
                }
            });
            return endereco;
        } catch (error) {
            console.error(`Error updating endereco ${error}`);
            throw error;
        }
    }

    async delete(id: string) {
        try {
            await prisma.endereco.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.error(`Error delete endereco ${error}`);
            throw error;
        }
    }
}

export { EnderecoService }