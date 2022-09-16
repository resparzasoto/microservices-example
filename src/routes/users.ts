import { Router } from 'express';
import { getUsers, putUser, postUser, deleteUser, getUser } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/', postUser);
router.get('/:id', putUser);
router.get('/:id', deleteUser);

export default router;