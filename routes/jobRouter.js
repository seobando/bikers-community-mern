import { Router } from "express";
const router = Router();

import {
  getAllBikes,
  getBike,
  createBike,
  updateBike,
  deleteBike,
} from "../controllers/bikeController.js";

router.route("/").get(getAllBikes).post(createBike);
router.route("/:id").get(getBike).patch(updateBike).delete(deleteBike);

export default router;