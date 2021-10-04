import axios from 'axios';
import { IBreweriesService } from '../interfaces/breweries.interface';
import { BrewerieDto } from '../models/brewerie.dto';

export class BreweriesService implements IBreweriesService {

    public getBreweries = async (): Promise<BrewerieDto[]> => {

        try {
            const response = await axios.get(process.env.BREWERIES_SERVICE_URL!);
            return response.status == 200 ? response.data as BrewerieDto[] : [];
        } catch (ex) {
            console.log('> BreweriesService - getBreweries - error: ', ex);
            throw ex;
        };
    }
}




