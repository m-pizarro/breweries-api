import { BrewerieDto } from '../models/brewerie.dto';

export interface IBreweriesService {
    getBreweries(): Promise<BrewerieDto[]>;
}