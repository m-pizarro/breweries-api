
import { BrewerieDto } from '../../models/brewerie.dto';
import { GeLocalization } from '../../utils/geo-localization';

export class MapRegionStep {

    static execute = (items: BrewerieDto[]): BrewerieDto[] => {

        items = items.filter(i => i.longitude && i.latitude);
        return items.map((x: BrewerieDto) => new GeLocalization().mapRegionByLatitudeAndLongitude(x));
    }
}
