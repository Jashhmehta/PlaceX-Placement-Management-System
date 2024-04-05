import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true, unique: true },
  sapId: { type: String, required: true, unique: true },
  rollNo: { type: String },
  gender: { type: String },
  dob: { type: String },
  tenthPercentage: { type: Number, required: true },
  tenthSchool: { type: String },
  twelfthPercentage: { type: Number, required: true },
  twelfthCollege: { type: String },
  graduationCollege: { type: String },
  graduationCGPA: { type: Number },
  stream: { type: String },
  sixthSemesterCGPA: { type: Number },
  isAdmin: { type: String },
  placementStatus: { type: String, default: null },
  companyPlaced: { type: String, default: null },
  appliedCompanies: [
    { type: mongoose.Schema.Types.ObjectId, ref: "companies" },
  ],
  
  
});

const UserModel = mongoose.model("User", userSchema);
export { UserModel as User };
