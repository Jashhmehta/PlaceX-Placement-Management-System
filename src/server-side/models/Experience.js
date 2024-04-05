import mongoose from 'mongoose';

const InterviewExperienceSchema = new mongoose.Schema({
    username:{type: String, required: true},
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    experience: { type: String, required: true },
    interviewLevel: { type: String, required: true },
    result: { type: String, required: true }
});

const InterviewModel = mongoose.model("Interviewexperience", InterviewExperienceSchema);
export { InterviewModel as Interview };
