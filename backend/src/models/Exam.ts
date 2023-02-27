import { Schema, model } from "mongoose";

interface IExam {
  name: string;
  start_date: Date;
  end_date: Date;
}

const ExamSchema = new Schema<IExam>({
  name: String,
  start_date: Date,
  end_date: Date,
});

const ExamModel = model("Exam", ExamSchema);

export default ExamModel;
