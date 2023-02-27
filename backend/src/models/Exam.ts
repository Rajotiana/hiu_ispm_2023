import { Schema, model } from "mongoose";

interface IExam {
  code: string;
  name: string;
  start_date: Date;
  end_date: Date;
}

const ExamSchema = new Schema<IExam>({
  code: String,
  name: String,
  start_date: Date,
  end_date: Date,
});

const ExamModel = model("Exam", ExamSchema);

export default ExamModel;
