import { RequestHandler } from "express";
import ExamModel from "../models/Exam";


export const getExams: RequestHandler<
    void,
    {
        exams: {
            id: string,
            name: string;
            start_date: Date;
            end_date: Date;
        }[];
    },
    void
> = async (req, res) => {
    try {
        const getExamResult = await ExamModel.find();

        if (getExamResult) return res.json({
            exams: getExamResult.map((e) => ({
                id: e.id,
                name: e.name,
                end_date: e.end_date,
                start_date: e.start_date
            }))
        })
    }
    catch (error) {

    }

}

export const createExam: RequestHandler<void, void, {
    name: string;
    start_date: Date;
    end_date: Date;
}> = async (req, res) => {
    try {
        const exam = req.body

        await new ExamModel({
            name: exam.name,
            start_date: exam.start_date,
            end_date: exam.end_date
        })
    }
    catch (error: any) {
        return res.send(error.message);
    }
}

export const deleteExam: RequestHandler<{ id: string }, void, void> = async (req, res) => {
    try {
        await ExamModel.findByIdAndDelete(req.params.id);
    }
    catch (error: any) {
        return res.send(error.message);
    }
}