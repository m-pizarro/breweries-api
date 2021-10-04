import { BrewerieDto } from '../../../models/brewerie.dto';
import { MapRegionStep } from '../../../services/etl-steps/map-region';

describe("MapRegionStep", () => {
    describe("when MapRegionStep is executed with successful", () => {
        it("should map region by latitude and longitude", async () => {
            // given
            const item: BrewerieDto[] = [{
                id: 9180,
                obdb_id: "boulder-beer-co-boulder",
                name: "Boulder Beer Co",
                brewery_type: "regional",
                street: "2880 Wilderness Pl",
                address_2: undefined,
                address_3: undefined,
                city: "Boulder",
                state: "Colorado",
                county_province: undefined,
                postal_code: "80301-5401",
                country: "United States",
                longitude: "-105.2480158",
                latitude: "40.026439",
                phone: undefined,
                website_url: undefined,
                updated_at: "2018-08-24T00:00:00.000Z",
                created_at: "2018-07-24T00:00:00.000Z"
            }];

            // when
            const result = await MapRegionStep.execute(item);

            // then
            const itemExpected: BrewerieDto[] | any = [{
                id: 9180,
                obdb_id: "boulder-beer-co-boulder",
                name: "Boulder Beer Co",
                brewery_type: "regional",
                street: "2880 Wilderness Pl",
                address_2: undefined,
                address_3: undefined,
                city: "Boulder",
                state: "Colorado",
                county_province: undefined,
                postal_code: "80301-5401",
                country: "United States",
                longitude: "-105.2480158",
                latitude: "40.026439",
                phone: undefined,
                website_url: undefined,
                updated_at: "2018-08-24T00:00:00.000Z",
                created_at: "2018-07-24T00:00:00.000Z",
                region: 'West'
            }]

            expect(result).toEqual(itemExpected);
        });
    });
});
