import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsers'
    });
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'getUser',
        id
    });
}

export const postUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'postUser',
        body
    });
}

export const putUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'postUser',
        id,
        body
    });
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    });
}