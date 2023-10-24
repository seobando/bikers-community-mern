import Bike from "../models/BikeModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllBikes = async (req, res) => {
  const bikes = await Bike.find({});
  res.status(StatusCodes.OK).json({ bikes });
};

export const createBike = async (req, res) => {
  const bike = await Bike.create(req.body);
  res.status(StatusCodes.CREATED).json({ bike });
};

export const getBike = async (req, res) => {
  const bike = await Bike.findById(req.params.id);
  res.status(StatusCodes.OK).json({ bike });
};

export const updateBike = async (req, res) => {
  const updatedBike = await Bike.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "bike modified", bike: updatedBike });
};

export const deleteBike = async (req, res) => {
  const removedBike = await Bike.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "bike deleted", bike: removedBike });
};
