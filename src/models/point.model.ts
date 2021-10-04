import { IPoint } from "../interfaces/point.interface";

export class Point implements IPoint {
    public latitude: string;
    public longitude: string;

    constructor(latitude: string, longitude: string) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}