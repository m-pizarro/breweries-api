import { IBrewerieModel } from '../interfaces/brewerie.interface';

export class BrewerieModel implements IBrewerieModel {
    public id!: number;
    public obdbId: string | undefined;
    public name: string | undefined;
    public breweryType: string | undefined;
    public street: string | undefined;
    public address2: string | undefined;
    public address3: string | undefined;
    public city: string | undefined;
    public state: string | undefined;
    public countyProvince: string | undefined;
    public postalCode: string | undefined;
    public country: string | undefined;
    public longitude: string | undefined;
    public latitude: string | undefined;
    public phone: string | undefined;
    public websiteUrl: string | undefined;
    public updatedAt!: string;
    public createdAt!: string;
    public region: string | undefined;
}
