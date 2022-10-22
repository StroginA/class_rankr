import { Router } from "express";
import usersController from "../controllers/usersController";
const router = Router();

router.get('/users/getInviteDetails', usersController.getInviteDetails)
export default router;