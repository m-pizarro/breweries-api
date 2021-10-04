import axios from "axios";
import { BreweriesService } from '../../services/breweries.service';

const breweriesService = new BreweriesService();

jest.mock("axios");

describe("getBreweries", () => {
    describe("when API call is successful", () => {
        it("should return breweries list", async () => {
            // given
            const breweries = [
                { id: 1, name: "Brewery 1" },
                { id: 2, name: "Brewery 2" },
                { id: 3, name: "Brewery 3" }
            ];

            const response = { status: 200, data: breweries }
            axios.get = jest.fn().mockResolvedValueOnce(response);

            // when
            const result = await breweriesService.getBreweries();

            // then
            expect(axios.get).toHaveBeenCalledWith(process.env.BREWERIES_SERVICE_URL!);
            expect(result).toEqual(breweries);
        });
    });

    describe("when API call fails", () => {
        it("should return empty breweries list", async () => {
            // given
            const response = { status: 404, data: [] }
            axios.get = jest.fn().mockResolvedValueOnce(response);

            // when
            const result = await breweriesService.getBreweries();

            // then
            expect(axios.get).toHaveBeenCalledWith(process.env.BREWERIES_SERVICE_URL!);
            expect(result).toEqual([]);
        });
    });
});
