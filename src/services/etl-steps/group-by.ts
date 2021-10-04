
import { IBrewerieModel } from '../../interfaces/brewerie.interface';

export class GroupByStep {
    static execute = (items: IBrewerieModel[]): Record<string, IBrewerieModel[]> => {
        return items.reduce(function (rv: any, x: any) { (rv[x['state']] = rv[x['state']] || []).push(x); return rv; }, {});
    };
}
