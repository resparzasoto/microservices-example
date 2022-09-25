import express, { Application } from 'express';
import userRoutes from '../routes/users';
import environment from '../utils/environment';

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = environment.PORT;

        this.routes();
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, (() => console.log(`server listening in http://localhost:${this.port}`)));
    }
}

export default Server;