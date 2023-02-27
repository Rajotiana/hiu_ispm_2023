import { ObjectId, Schema, Types, model } from "mongoose";

interface IGrade {
  student_id: string;
  exam_id: string;
  subject: string;
  score: number;
}

const GradeSchema = new Schema<IGrade>({
  student_id: String,
  exam_id: String,
  subject: String,
  score: {
    type: Number,
    default: 0,
  },
});

const GradeModel = model("Grade", GradeSchema);

export default GradeModel;
