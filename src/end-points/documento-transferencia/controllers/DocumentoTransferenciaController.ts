import { Request, Response } from "express";
import { handleError, validateId } from "../../../utils/utils";
import { DocumentoTransferenciaDTO } from "../DocumentoTransferenciaDTO/DocumentoTransferenciaDTO.dto";
import { DocumentoTransferenciaService } from "../services/DocumentoTransferenciaService";

class DocumentoTransferenciaController {
    private documentoTransferenciaService: DocumentoTransferenciaService;

    constructor() {
        this.documentoTransferenciaService = new DocumentoTransferenciaService();
    }

    async create(req: Request, res: Response) { 
        try {
            const documentoTransferenciaDTO: DocumentoTransferenciaDTO = req.body;
            const result = await this.documentoTransferenciaService.create(documentoTransferenciaDTO);
            return res.status(201).json(result);
        } catch (error) {
            return handleError(res, error, "Error creating documento transferencia");
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const documentoTransferenciaDTO: DocumentoTransferenciaDTO = req.body;
            const result = await this.documentoTransferenciaService.update(id, documentoTransferenciaDTO);
            return res.status(200).json(result);
        } catch (error) {
            return handleError(res, error, "Error updating documento transferencia");
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            validateId(id, res);
            await this.documentoTransferenciaService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return handleError(res, error, "Error deleting documento transferencia");
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            validateId(id, res);
            const result = await this.documentoTransferenciaService.findById(id);
            return res.status(200).json(result);
        } catch (error) {
            return handleError(res, error, "Error getting documento transferencia by id");
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const result = await this.documentoTransferenciaService.findAll();
            return res.status(200).json(result);
        } catch (error) {
            return handleError(res, error, "Error getting all documentos transferencia");
        }
    }
}

export { DocumentoTransferenciaController };