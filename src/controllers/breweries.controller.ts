import { Request, Response, NextFunction } from "express";
import { IBreweriesService } from "../interfaces/breweries.interface";
import { IEtlPipelineService } from "../interfaces/etl-pipeline.interface";
import { BreweriesService } from '../services/breweries.service';
import { EtlPipelineService } from '../services/etl-pipeline.service';

export class BreweriesController {

    private breweriesService: IBreweriesService;
    private pipelineService: IEtlPipelineService;

    constructor() {
        this.breweriesService = new BreweriesService();
        this.pipelineService = new EtlPipelineService();
    }

    /**
     * Get the breweries
     * @param req - The express rquest.
     * @param res - The express response.
     * @param next - The express next function
     * @returns 
     */
    public getBreweries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

        try {

            var items = await this.breweriesService.getBreweries();
            if (!items || items.length == 0) {
                res.sendStatus(404);
            }
            else {
                var result = await this.pipelineService.runProcess(items!);
                res.send(result);
            }

        } catch (ex) {
            console.log('> BreweriesController - getBreweries - error: ', ex);
            return next(ex);
        }
    }
}