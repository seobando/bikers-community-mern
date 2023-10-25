import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    userStatus: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    userType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship'],
      default: 'full-time',
    },
    userLocation: {
      type: String,
      default: 'my city',
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);