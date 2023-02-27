import { Router } from "express";
import { getSector } from "../controllers/global";

const router = Router();

router.post("/get-sector", getSector);

export default router;
