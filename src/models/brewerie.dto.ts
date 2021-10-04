export class BrewerieDto {
    public id!: number;
    public obdb_id: string | undefined;
    public name: string | undefined;
    public brewery_type: string | undefined;
    public street: string | undefined;
    public address_2: string | undefined;
    public address_3: string | undefined;
    public city: string | undefined;
    public state: string | undefined;
    public county_province: string | undefined;
    public postal_code: string | undefined;
    public country: string | undefined;
    public longitude: string | undefined;
    public latitude: string | undefined;
    public phone: string | undefined;
    public website_url: string | undefined;
    public updated_at!: string;
    public created_at!: string;
}
