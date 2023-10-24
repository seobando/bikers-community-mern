import mongoose from 'mongoose';

const BikeSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    bikeStatus: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    bikeType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship'],
      default: 'full-time',
    },
    bikeLocation: {
      type: String,
      default: 'my city',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Bike', BikeSchema);