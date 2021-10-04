import { BrewerieDto } from '../../models/brewerie.dto';
import { IBrewerieModel } from '../../interfaces/brewerie.interface';
import { toCamelCase } from '../../utils/utils';

export class ConverToCamelCaseStep {
    static execute = (objs: BrewerieDto[]): IBrewerieModel[] => {
        let items: IBrewerieModel[] = [];
        objs.forEach(obj => items.push(Object.entries(obj).reduce((a: any, [k, v]) => (a[toCamelCase(k)] = v, a), {})));
        return items;
    }
}
