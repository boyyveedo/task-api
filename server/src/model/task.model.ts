import mongoose, { Document } from "mongoose";


export interface Itask extends Document {
    name: string;
    completed: boolean;
}

// Define the Task schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Must provide name'],
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Create and export the Task model
export const Task = mongoose.model<Itask>('Task', TaskSchema);
