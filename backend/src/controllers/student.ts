import { RequestHandler } from "express";
import StudentModel from "../models/Student";
import GradeModel from "../models/Grade";
import ExamModel from "../models/Exam";

export const getStudent: RequestHandler<
  {
    id: string;
  },
  {
    matricule: string;
    first_name: string;
    last_name: string;
    level: number;
    sector: string;
  },
  void
> = async (req, res) => {
  const student = await StudentModel.findById(req.params.id);

  if (student) {
    return res.json({
      matricule: student.matricule,
      first_name: student.first_name,
      last_name: student.last_name,
      level: student.level,
      sector: student.sector,
    });
  } else {
    return res.status(404).end();
  }
};

export const getStudentGrades: RequestHandler<
  {
    id: string;
  },
  {
    grades: {
      examName: string;
      subject: string;
      score: number;
    }[];
  },
  void
> = async (req, res) => {
  const grades = await GradeModel.find({
    student_id: req.params.id,
  });

  const finalGrades: {
    examName: string;
    subject: string;
    score: number;
  }[] = [];

  for (const grade of grades) {
    const exam = await ExamModel.findById(grade.exam_id);

    if (exam) {
      finalGrades.push({
        examName: exam.name,
        subject: grade.subject,
        score: grade.score,
      });
    }
  }

  return res.json({
    grades: finalGrades,
  });
};
