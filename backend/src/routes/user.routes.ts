import { Router } from 'express';
import { userRegistration } from '../controllers/user.controller';

const router = Router();

router.get('/registration', userRegistration);

export default router;
