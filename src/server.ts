import express from "express";
import routes from './routes/index';
import dotenv from 'dotenv';

export class Server {
    public app: express.Application;

    constructor() {
        dotenv.config();
        this.app = express();
        this.config();
        this.routes();
        this.errorHandling();
    }

    public routes(): void {
        this.app.use('/', routes());
    }

    public config(): void {
        this.app.set("port", process.env.port);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    public start(): void {
        if (process.env.NODE_ENV !== 'test') {
            this.app.listen(this.app.get("port"), () => {
                console.log(`App listening on ${this.app.get("port")}`);
            });
        }
    }

    public errorHandling(): void {
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            const error = new Error('No such route exists');
            return res.status(404).json({
                message: error.message
            });
        });
    }
}

const server = new Server();

server.start();
