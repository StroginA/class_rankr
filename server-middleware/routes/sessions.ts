import { Router } from "express";
import sessionsController from '../controllers/sessionsController';
const router = Router();

router.post('/sessions/create', sessionsController.create)
export default router;