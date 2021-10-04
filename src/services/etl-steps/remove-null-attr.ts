
import { BrewerieDto } from '../../models/brewerie.dto';

export class RemoveNullAttrStep {

    static execute = (objs: BrewerieDto[]): BrewerieDto[] => {
        let items: BrewerieDto[] = [];
        objs.forEach(obj => items.push(Object.entries(obj).reduce((a: any, [k, v]) => (v == null ? a : (a[k] = v, a)), {})));
        return items;
    }
}
