import express, { Application } from 'express';
import userRoutes from '../routes/users'

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

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