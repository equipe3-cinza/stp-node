import { Request, Response } from "express";
import { handleError, validateId } from "../../../utils/utils";
import { MedicamentoDTO } from "../dtos/MedicamentoDTO.dto";
import { MedicamentoService } from "../services/MedicamentoService";

export class MedicamentoController {
    private medicamentoService: MedicamentoService;
    
    constructor() {
        this.medicamentoService = new MedicamentoService();
    }
    
    create = async (req: Request, res: Response) => {
        try {
        const medicamentoDTO: MedicamentoDTO = req.body;
        const result = await this.medicamentoService.create(medicamentoDTO);
        return res.status(201).json(result);
        } catch (error) {
        return handleError(res, error, "Error creating medicamento");
        }
    };
    
    update = async (req: Request, res: Response) => {
        try {
        const id: string = req.params.id;
        const medicamentoDTO: MedicamentoDTO = req.body;
        const result = await this.medicamentoService.update(id, medicamentoDTO);
        return res.status(200).json(result);
        } catch (error) {
        return handleError(res, error, "Error updating medicamento");
        }
    };
    
    delete = async (req: Request, res: Response) => {
        try {
        const id: string = req.params.id;
        validateId(id, res);
        await this.medicamentoService.delete(id);
        return res.status(204).send();
        } catch (error) {
        return handleError(res, error, "Error deleting medicamento");
        }
    };
    
    findById = async (req: Request, res: Response) => {
        try {
        const id: string = req.params.id;
        validateId(id, res);
        const result = await this.medicamentoService.findById(id);
        return res.status(200).json(result);
        } catch (error) {
        return handleError(res, error, "Error getting medicamento by id");
        }
    };
    
    findAll = async (req: Request, res: Response) => {
        try {
        const result = await this.medicamentoService.findAll();
        return res.status(200).json(result);
        } catch (error) {
        return handleError(res, error, "Error getting all medicamentos");
        }
    };
    }