import { BrewerieDto } from '../../models/brewerie.dto';
import { IBrewerieModel } from '../../interfaces/brewerie.interface';
import { EtlPipelineService } from '../../services/etl-pipeline.service';

const etlPipelineService = new EtlPipelineService();

describe("runProcess", () => {
    describe("when runProcess pipeline is executed with successful", () => {
        it("should transform input data to an expected ouput", async () => {
            // given
            const items: BrewerieDto[] = [{
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
            },
            {
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
            },
            {
                id: 11039,
                obdb_id: "goose-island-philadelphia-philadelphia",
                name: "Goose Island Philadelphia",
                brewery_type: "brewpub",
                street: "1002 Canal St",
                address_2: undefined,
                address_3: undefined,
                city: "Philadelphia",
                state: "Pennsylvania",
                county_province: undefined,
                postal_code: "19123",
                country: "United States",
                longitude: "-75.13506341",
                latitude: "39.9648491",
                phone: undefined,
                website_url: undefined,
                updated_at: "2018-08-24T00:00:00.000Z",
                created_at: "2018-07-24T00:00:00.000Z"
            }]

            // when
            const result = await etlPipelineService.runProcess(items);

            // then
            const itemsExpected1: IBrewerieModel[] | any = [
                {
                    id: 9180,
                    obdbId: "boulder-beer-co-boulder",
                    name: "Boulder Beer Co",
                    breweryType: "regional",
                    street: "2880 Wilderness Pl",
                    city: "Boulder",
                    region: "West",
                    state: "Colorado",
                    postalCode: "80301-5401",
                    country: "United States",
                    longitude: "-105.2480158",
                    latitude: "40.026439",
                    updatedAt: "2018-08-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                }
            ];

            const itemsExpected2: IBrewerieModel[] | any = [
                {
                    id: 11039,
                    obdbId: "goose-island-philadelphia-philadelphia",
                    name: "Goose Island Philadelphia",
                    breweryType: "brewpub",
                    street: "1002 Canal St",
                    city: "Philadelphia",
                    region: "Northeast",
                    state: "Pennsylvania",
                    postalCode: "19123",
                    country: "United States",
                    longitude: "-75.13506341",
                    latitude: "39.9648491",
                    updatedAt: "2018-08-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                }
            ];

            const expectedItems: Record<string, IBrewerieModel[] | any> = {};
            expectedItems["Colorado"] = itemsExpected1;
            expectedItems["Pennsylvania"] = itemsExpected2;

            expect(result).toEqual(expectedItems);
        });
    });
});