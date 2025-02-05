import mongoose from "mongoose";


const ReclamSchema = new mongoose.Schema({

title:{
    type: String,
    required: [true, "Please provoide a title"],
    unique: true,
},

description:{
    type: String,
    default: "No description",
},


dueDate:{
    type: Date,
    default: Date.now(),
},

status:{
    type: String,
    enum: ["active", "inactive"],
     default: "active",
},

completed:{
    type: Boolean,
     default: false,
},

priority:
{
    type: String,
    enum: ["low", "medium", "high"],
     default: "low",
},

user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
}, 


}, {timestamps: true});
const Reclam = mongoose.model("Reclam", ReclamSchema);

export default Reclam;