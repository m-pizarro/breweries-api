import { IPoint } from "../interfaces/point.interface";
import { Point } from "../models/point.model";
import { usStaesRegions } from '../loaders/us-region-states';
import { BrewerieDto } from "../models/brewerie.dto";

const cos = Math.cos;
const sin = Math.sin;
const acos = Math.acos;
const deg2rad = (angleInDegrees: string) => { return parseFloat(angleInDegrees) * .017453292519943295 };

export class GeLocalization {
    /**
     * Get region by latitude and longitude
     * @param item
     * @returns 
     */
    public mapRegionByLatitudeAndLongitude = (item: BrewerieDto): BrewerieDto => {

        const statesByDistance = this.getStatesByDistance(item.latitude!, item.longitude!);

        const sortStates = this.sortStatesByDistance(statesByDistance);

        return Object.assign(item, { region: sortStates[0].region });
    }

    /**
     * Calculate distance between two points
     * @param point1
     * @param point2
     * @returns {number}
     */
    private calculateDistance = (point1: IPoint, point2: IPoint) => {
        const point1Rad = deg2rad(point1.latitude);
        const point2Rad = deg2rad(point2.latitude);
        const a = deg2rad(point2.longitude) - deg2rad(point1.longitude);
        const b = cos(point1Rad) * cos(point2Rad) * cos(a);
        const c = sin(point1Rad) * sin(point2Rad);
        const r = b + c;

        return acos(r > 1 ? 1 : r) * 6371392.896;
    }

    /**
     * Set state by distance
     * @param latitude 
     * @param longitude 
     * @returns 
     */
    private getStatesByDistance = (latitude: string, longitude: string): any[] => {

        const statesByDistance = usStaesRegions.map((x) => {
            return { ...x, distance: this.calculateDistance(new Point(latitude, longitude), new Point(x.latitude.toString(), x.longitude.toString())) };
        });

        return statesByDistance;
    }

    /**
     * Sort states by distance
     * @param statesByDistance 
     * @returns 
     */
    private sortStatesByDistance = (statesByDistance: any): any[] => {

        statesByDistance.sort((a: any, b: any) => {
            return a.distance - b.distance;
        });

        return statesByDistance;
    }

}

