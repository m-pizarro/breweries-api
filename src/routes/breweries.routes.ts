import { Router } from 'express';
import { BreweriesController } from '../controllers/breweries.controller';
import { AuthController } from "../controllers/auth.controller";

export class BreweriesRoutes {

    public router: Router;
    public breweriesController: BreweriesController = new BreweriesController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/", this.authController.authenticateJWT, this.breweriesController.getBreweries);
    }
}