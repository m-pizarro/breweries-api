import { IBrewerieModel } from '../interfaces/brewerie.interface';
import { BrewerieDto } from '../models/brewerie.dto';

export interface IEtlPipelineService {
    runProcess(items: BrewerieDto[]): Promise<Record<string, IBrewerieModel[]>>;
}

