
import { IBrewerieModel } from '../../../interfaces/brewerie.interface';
import { SortByStep } from '../../../services/etl-steps/sort-by';

describe("SortByStep", () => {
    describe("when SortByStep method is executed with successful", () => {
        it("should sort the items by createdAt so the most recent ones come first", async () => {
            // given
            const items: Record<string, IBrewerieModel[] | any> = {};
            items["Colorado"] = [
                {
                    id: 9180,
                    obdbId: "boulder-beer-co-boulder",
                    name: "Boulder Beer Co",
                    breweryType: "regional",
                    street: "2880 Wilderness Pl",
                    city: "Boulder",
                    state: "Colorado",
                    postalCode: "80301-5401",
                    country: "United States",
                    longitude: "-105.2480158",
                    latitude: "40.026439",
                    updatedAt: "2018-08-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                },
                {
                    id: 11039,
                    obdbId: "goose-island-philadelphia-philadelphia",
                    name: "Goose Island Philadelphia",
                    breweryType: "brewpub",
                    street: "1002 Canal St",
                    city: "Philadelphia",
                    state: "Colorado",
                    postalCode: "19123",
                    country: "United States",
                    longitude: "-75.13506341",
                    latitude: "39.9648491",
                    updatedAt: "2018-10-24T00:00:00.000Z",
                    createdAt: "2018-08-24T00:00:00.000Z" // most recent 
                }
            ];

            // when
            await SortByStep.execute(items);

            // then
            const expectedItems: Record<string, IBrewerieModel[] | any> = {};
            expectedItems["Colorado"] = [
                {
                    id: 11039,
                    obdbId: "goose-island-philadelphia-philadelphia",
                    name: "Goose Island Philadelphia",
                    breweryType: "brewpub",
                    street: "1002 Canal St",
                    city: "Philadelphia",
                    state: "Colorado",
                    postalCode: "19123",
                    country: "United States",
                    longitude: "-75.13506341",
                    latitude: "39.9648491",
                    updatedAt: "2018-10-24T00:00:00.000Z",
                    createdAt: "2018-08-24T00:00:00.000Z" // most recent 
                },
                {
                    id: 9180,
                    obdbId: "boulder-beer-co-boulder",
                    name: "Boulder Beer Co",
                    breweryType: "regional",
                    street: "2880 Wilderness Pl",
                    city: "Boulder",
                    state: "Colorado",
                    postalCode: "80301-5401",
                    country: "United States",
                    longitude: "-105.2480158",
                    latitude: "40.026439",
                    updatedAt: "2018-08-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                }
            ];

            expect(items).toEqual(expectedItems);
        });
    });
});
