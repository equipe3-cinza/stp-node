import { Request, Response } from "express";
import { TransferenciaService } from "../services/TransferenciaService";
import { TransferenciaDTO } from "../dtos/Transferencia.dto";
import { handleError, validateId } from "../../../utils/utils";

export class TransferenciaController {
  private transferenciaService: TransferenciaService;

  constructor() {
    this.transferenciaService = new TransferenciaService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const transferenciaDTO: TransferenciaDTO = req.body;
      const result = await this.transferenciaService.create(
        transferenciaDTO
      );
      return res.status(201).json(result);
    } catch (error) {
      return handleError(res, error, "Error creating transferencia");
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      validateId(id, res);
      const transferenciaDTO: TransferenciaDTO = req.body;
      const result = await this.transferenciaService.update(
        id,
        transferenciaDTO
      );
      return res.status(200).json(result);
    } catch (error) {
      return handleError(res, error, "Error updating transferencia");
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      validateId(id, res);
      await this.transferenciaService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return handleError(res, error, "Error deleting transferencia");
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      validateId(id, res);
      const result = await this.transferenciaService.findById(id);
      return res.status(200).json(result);
    } catch (error) {
      return handleError(res, error, "Error getting transferencia by id");
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.transferenciaService.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return handleError(res, error, "Error getting transferencia");
    }
  };
}