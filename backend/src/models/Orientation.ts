import { Schema, SchemaTypes, model } from "mongoose";

interface IOrientation {
  values: {
    question: number;
    value: number;
  }[];
}

const OrientationSchema = new Schema<IOrientation>({
  values: SchemaTypes.Mixed,
});

const OrientationModel = model("Orientation", OrientationSchema);

export default OrientationModel;
