import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
  title: { type: String, required: true },
  description:  String ,
  deadline: Date,
  done: Boolean,
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  created_at: Date,
  updated_at: Date
  
});

const dateValidator = (date) => {
  if (!date) return false;
  return date > new Date();
};

TaskSchema.path("deadline").validate(dateValidator, 'Deadline must be a future date');


export default mongoose.model('Task', TaskSchema);
