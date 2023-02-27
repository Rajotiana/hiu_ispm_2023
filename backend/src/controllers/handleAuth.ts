import { Express } from "express";
import { Request, Response } from "express";
import AccountModel from "../models/Account";
import StudentModel from "../models/Student";


// interface IstudentInfo {
//     firstName: string,
//     lastName: string,
//     password: string,
//     email: string,
//     subject: string,
//     level: number
//     matricule: string
// }

class Auth {
    public static async register(req: Request, res: Response) {
        const { firstName, lastName, password, email, sector, level, matricule } = req.body;

        await new AccountModel({
            email: email,
            password: password,
            role: "STUDENT"
        }).save().then(async (account) => {
            await StudentModel.create({
                id: account._id,
                first_name: firstName,
                last_name: lastName,
                level: level,
                matricule: matricule,
                sector: sector
            }).then(() => {
                return res.end()
            });
        })
    }

    public static async login(req: Request, res: Response) {
        const { password, email } = req.body;
        const findUser = await AccountModel.findOne({ email: email, password: password });
        if (findUser) {
            const data = {
                "id": findUser._id,
                "email": findUser.email
            }
            return res.json(data);
        } else {
            return res.json({ "Error": "Error authentification" });
        }

    }
}
export default Auth;