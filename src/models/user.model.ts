import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    public id!: number;
    public username!: string;
    public password!: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }

    public static findOne = (username: string): IUser | undefined => {
        // In this implementation, I use mock data only with the purpose to test Passport JWT auth. 
        // In a real scenario we should get the user from a data storage.   
        return username === process.env.AUTH_USERNAME ? new User(1, username) : undefined;
    }

    public static isValidPassword = (password: string): boolean => {
        return password === process.env.AUTH_PASWORD;
    }
}