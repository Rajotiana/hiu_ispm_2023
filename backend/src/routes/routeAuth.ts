import Express from "express"
import Auth from "../controllers/handleAuth"
import { getExams, createExam, deleteExam } from "../controllers/handleExam";
const apiRouter = Express.Router()

apiRouter.post("/api/auth/signup", Auth.register);
apiRouter.post("/api/auth/signin", Auth.login);

apiRouter.get("/api/exams/getexams", getExams);
apiRouter.post("/api/exams/createxams", createExam);
apiRouter.delete("/api/exams/deletExam", deleteExam);

export default apiRouter

