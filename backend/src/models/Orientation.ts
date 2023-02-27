import { Schema, model } from "mongoose";

interface IOrientation {
  question: number;
  value: number;
}

const OrientationSchema = new Schema<IOrientation>({
  question: Number,
  value: {
    type: Number,
    default: 0,
  },
});

const OrientationModel = model("Orientation", OrientationSchema);

export default OrientationModel;
