import { Request, Response } from "express";
import { UnidadeHospitalarService } from "../services/UnidadeHospitalarService";
import { UnidadeHospitalarDTO } from "../dtos/unidade-hospitalar.dto";
import { handleError, validateId } from "../../../utils/utils";

export class UnidadeHospitalarController {
  private unidadeHospitalarService: UnidadeHospitalarService;

  constructor() {
    this.unidadeHospitalarService = new UnidadeHospitalarService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const unidadeHospitalarDTO: UnidadeHospitalarDTO = req.body;
      const result = await this.unidadeHospitalarService.create(
        unidadeHospitalarDTO
      );
       return res.status(201).json(result);
    } catch (error) {
        return handleError(res, error, "Error creating unidade hospitalar");
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const unidadeHospitalarDTO: UnidadeHospitalarDTO = req.body;
      const result = await this.unidadeHospitalarService.update(
        id,
        unidadeHospitalarDTO
      );
       return res.status(200).json(result);
    } catch (error) {
        return handleError(res, error, "Error updating unidade hospitalar");
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      validateId(id, res)
      await this.unidadeHospitalarService.delete(id);
       return res.status(204).send();
    } catch (error) {
        return handleError(res, error, "Error deleting unidade hospitalar");
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      validateId(id, res)
      const result = await this.unidadeHospitalarService.findById(id);
       return res.status(200).json(result);
    } catch (error) {
        return handleError(res, error, "Error getting unidade hospitalar by id");
    }
  };

    findAll = async (req: Request, res: Response) => {
      try {
        const result = await this.unidadeHospitalarService.findAll();
        return res.status(200).json(result);
      } catch (error) {
        return handleError(res, error, "Error getting unidade hospitalar");
      }
    };
}
