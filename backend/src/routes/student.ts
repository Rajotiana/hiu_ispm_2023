import { Router } from "express";
import { getStudent, getStudentGrades } from "../controllers/student";

const router = Router();

router.get("/:id", getStudent);
router.get("/:id/grades", getStudentGrades);

export default router;
