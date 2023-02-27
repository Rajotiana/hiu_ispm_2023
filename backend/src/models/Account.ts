import { Schema, model } from "mongoose";

interface IAccount {
  email: string;
  password: string;
  role: "ADMIN" | "STUDENT";
}

const AccountSchema = new Schema<IAccount>({
  email: String,
  password: String,
  role: String,
});

const AccountModel = model("Account", AccountSchema);

export default AccountModel;
