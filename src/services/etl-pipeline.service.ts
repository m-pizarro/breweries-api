import { IBrewerieModel } from '../interfaces/brewerie.interface';
import { BrewerieDto } from '../models/brewerie.dto';
import * as  step from './etl-steps/index';

export class EtlPipelineService {

    public runProcess = async (items: BrewerieDto[]): Promise<Record<string, IBrewerieModel[]>> => {

        try {
            let result: Record<string, IBrewerieModel[]>;

            // If the brewery does not have a longitude & latitude then filter it out.
            items = await step.MapRegionStep.execute(items);

            // Remove any attributes that are null from the data
            items = await step.RemoveNullAttrStep.execute(items);

            // Convert the keys of the objects in the response from snake case to camel case
            let breweries: IBrewerieModel[] = await step.ConverToCamelCaseStep.execute(items);

            // Group the breweries together by state
            result = await step.GroupByStep.execute(breweries);

            // then sort them by created_at so the most recent ones come first.
            await step.SortByStep.execute(result);

            return result;

        } catch (ex) {
            console.log('> EtlPipelineService - runProcess - error: ', ex);
            throw ex;
        };
    }
}




