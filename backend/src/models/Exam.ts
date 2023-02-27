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
  start_date: {
    type: Date,
    default: new Date(),
  },
  end_date: { type: Date, default: new Date() },
});

const ExamModel = model("Exam", ExamSchema);

export default ExamModel;
