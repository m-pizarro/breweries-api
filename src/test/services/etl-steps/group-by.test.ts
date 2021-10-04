import { IBrewerieModel } from '../../../interfaces/brewerie.interface';
import { GroupByStep } from '../../../services/etl-steps/group-by';

describe("GroupByStep", () => {
    describe("when groupByState is executed with successful", () => {
        it("should group the breweries together by state", async () => {
            // given
            const items: IBrewerieModel[] | any = [
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
                    state: "Pennsylvania",
                    postalCode: "19123",
                    country: "United States",
                    longitude: "-75.13506341",
                    latitude: "39.9648491",
                    updatedAt: "2018-08-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                }]

            // when
            const result = await GroupByStep.execute(items);

            // then
            const expectedItems: Record<string, IBrewerieModel[] | any> = {};
            expectedItems["Colorado"] = [
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
            ];;

            expectedItems["Pennsylvania"] = [
                {
                    id: 11039,
                    obdbId: "goose-island-philadelphia-philadelphia",
                    name: "Goose Island Philadelphia",
                    breweryType: "brewpub",
                    street: "1002 Canal St",
                    city: "Philadelphia",
                    state: "Pennsylvania",
                    postalCode: "19123",
                    country: "United States",
                    longitude: "-75.13506341",
                    latitude: "39.9648491",
                    updatedAt: "2018-08-24T00:00:00.000Z",
                    createdAt: "2018-07-24T00:00:00.000Z"
                }
            ];;

            expect(result).toEqual(expectedItems);
        });
    });
});