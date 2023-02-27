import { RequestHandler } from "express";
import OrientationModel from "../models/Orientation";

export const getSector: RequestHandler<
  void,
  {
    sector: string;
  },
  {
    orientations: {
      question: number;
      value: number;
    }[];
  }
> = async (req, res) => {
  const orientations = req.body.orientations;

  new OrientationModel({
    values: orientations,
  })
    .save()
    .then(() => {
      // Do IA Logic/Cluster and return the suggest sector

      const sector = "ISAIA";

      return res.json({
        sector: sector,
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
