
import { IBrewerieModel } from '../../interfaces/brewerie.interface';

export class SortByStep {
    static execute = (group: Record<string, IBrewerieModel[]>): void => {
        Object.entries(group).map(([k, arr]) => {
            group[k] = arr.sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt)) ? 1 : -1)
        });
    };
}
