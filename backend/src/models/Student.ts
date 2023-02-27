import { Schema, model } from "mongoose";

interface IStudent {
  matricule: string;
  first_name: string;
  last_name: string;
  level: number;
  subject: string;
}

const StudentSchema = new Schema<IStudent>({
  matricule: String,
  first_name: String,
  last_name: String,
  level: String,
  subject: String,
});

const StudentModel = model("Student", StudentSchema);

export default StudentModel;
