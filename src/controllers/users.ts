import { Request, Response } from 'express';
import environment from '../utils/environment';

export const getUsers = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsers',
        lb: `http://localhost:${environment.PORT}`
    });
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'getUser',
        id,
        lb: `http://localhost:${environment.PORT}`
    });
}

export const postUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'postUser',
        body,
        lb: `http://localhost:${environment.PORT}`
    });
}

export const putUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'postUser',
        id,
        body,
        lb: `http://localhost:${environment.PORT}`
    });
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id,
        lb: `http://localhost:${environment.PORT}`
    });
}