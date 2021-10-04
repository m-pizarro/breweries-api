import { BrewerieDto } from '../../../models/brewerie.dto';
import { IBrewerieModel } from '../../../interfaces/brewerie.interface';
import { ConverToCamelCaseStep } from '../../../services/etl-steps/convert-to-camel-case';

describe("converToCamelCase", () => {
    describe("when converToCamelCase method is successful", () => {
        it("should convert attr to camel case", async () => {
            // given
            const item: BrewerieDto[] = [{
                id: 9094,
                obdb_id: "bnaf-llc-austin",
                name: "Bnaf, LLC",
                brewery_type: "planning",
                street: undefined,
                address_2: undefined,
                address_3: undefined,
                city: "Austin",
                state: "Texas",
                county_province: undefined,
                postal_code: "78727-7602",
                country: "United States",
                longitude: undefined,
                latitude: undefined,
                phone: undefined,
                website_url: undefined,
                updated_at: "2018-07-24T00:00:00.000Z",
                created_at: "2018-07-24T00:00:00.000Z"
            }]

            // when
            const result = await ConverToCamelCaseStep.execute(item);

            // then
            const itemExpected: IBrewerieModel[] | any[] = [
                {
                    id: 9094,
                    obdbId: "bnaf-llc-austin",
                    name: "Bnaf, LLC",
                    breweryType: "planning",
                    city: "Austin",
                    state: "Texas",
                    postalCode: "78727-7602",
                    country: "United States",
                    updatedAt: "2018-07-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                }];

            expect(result).toEqual(itemExpected);
        });
    });
});