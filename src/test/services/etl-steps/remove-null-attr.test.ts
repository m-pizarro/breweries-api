import { BrewerieDto } from '../../../models/brewerie.dto';
import { RemoveNullAttrStep } from '../../../services/etl-steps/remove-null-attr';

describe("RemoveNullAttrStep", () => {
    describe("when RemoveNullAttrStep method is executed with successful", () => {
        it("should remove attr that are null", async () => {
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
            }];

            // when
            const result = await RemoveNullAttrStep.execute(item);

            // then
            const itemExpected: BrewerieDto[] | any = [{
                id: 9094,
                obdb_id: "bnaf-llc-austin",
                name: "Bnaf, LLC",
                brewery_type: "planning",
                city: "Austin",
                state: "Texas",
                postal_code: "78727-7602",
                country: "United States",
                updated_at: "2018-07-24T00:00:00.000Z",
                created_at: "2018-07-24T00:00:00.000Z"
            }]

            expect(result).toEqual(itemExpected);
        });
    });
});