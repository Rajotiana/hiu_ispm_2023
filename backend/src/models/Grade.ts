import { ObjectId, Schema, Types, model } from "mongoose";

interface IGrade {
  student_id: ObjectId;
  exam_id: ObjectId;
  subject: string;
  score: number;
}

const GradeSchema = new Schema<IGrade>({
  student_id: Types.ObjectId,
  exam_id: Types.ObjectId,
  subject: String,
  score: {
    type: Number,
    default: 0,
  },
});

const GradeModel = model("Grade", GradeSchema);

export default GradeModel;
