import 'express-async-errors';
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from 'mongoose';


//routers
import bikeRouter from './routes/bikeRouter.js';
import userRouter from "./routes/userRouter.js";

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "date received", data: req.body });
});

// HANDLE Bikes
app.use('/api/v1/bikes',bikeRouter);

// HANDLE Users
app.use('/api/v1/users',userRouter);

// NOT FOUND MIDDLEWARE
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// ERROR MIDDLEWARE
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}