import { RequestHandler } from "express";
import GradeModel from "../models/Grade";
import StudentModel from "../models/Student";
import ExamModel from "../models/Exam";

export const submitGrades: RequestHandler<
  void,
  void,
  {
    matricule: string;
    exam_code: string;
    exam_subject: string;
    score: number;
  }
> = async (req, res) => {
  const grade = req.body;

  const student = await StudentModel.findOne({
    matricule: grade.matricule,
  });

  if (student) {
    const exam = await ExamModel.findOne({
      code: grade.exam_code,
    });

    if (exam) {
      new GradeModel({
        subject: grade.exam_subject,
        student_id: student.id,
        exam_id: grade.exam_code,
        score: grade.score,
      });

      return res.end();
    } else {
      return res.status(404).end();
    }
  } else {
    return res.status(404).end();
  }
};
