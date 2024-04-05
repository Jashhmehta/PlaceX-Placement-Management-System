import mongoose from 'mongoose'
const CompanySchema = new mongoose.Schema({
    companyname: { type: String, required: true },
    jobprofile: { type: String, required: true},
    jobdescription: { type: String, required: true },
    website: { type: String, required: true},
    ctc: { type: Number, required: true },
    doi: { type: String },
    eligibilityCriteria: [{ type: String }],
    tenthPercentage: { type: Number, required: true },
    twelfthPercentage: { type: Number, required: true },
    graduationCGPA: { type: Number },
    sixthSemesterCGPA: { type: Number },
});

const CompanyModel = mongoose.model("Company", CompanySchema);
export {CompanyModel as Company}
