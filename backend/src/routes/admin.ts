import { Router } from "express";
import { submitGrades } from "../controllers/admin";

const router = Router();

router.post("/submit-grades", submitGrades);

export default router;
