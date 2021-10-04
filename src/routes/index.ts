
import { Router } from 'express';
import { UserRoutes } from './user.routes';
import { BreweriesRoutes } from './breweries.routes';

export const route = Router();

export default () => {

    route.use("/user", new UserRoutes().router);
    route.use("/breweries", new BreweriesRoutes().router);

    return route
}