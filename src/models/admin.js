import mongoose, { Schema, models } from "mongoose";

const AdminSchema = new Schema(
    {
        username: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

const Admin = models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
