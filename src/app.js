import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import AuthRoutes from "./routes/AuthRoutes";
import CourseRoutes from "./routes/CourseRoutes";
import ModuleRoutes from "./routes/ModuleRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import MaterialRoutes from "./routes/MaterialRoutes";
import RateRoutes from "./routes/RateRoutes";

import models from "./models";

import cors from "cors";

dotenv.config();

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//Code Made(API)
app.use("/api/auth", AuthRoutes);
app.use("/api/course", CourseRoutes);
app.use("/api/module", ModuleRoutes);
app.use("/api/comment", CommentRoutes);
app.use("/api/material", MaterialRoutes);
app.use("/api/rate", RateRoutes);

//Server start
app.get("/", (req, res) => {
  console.log({ message: "Welcome CODEMADE-API" });
  return res.status(200).send({
    status: 200,
    message: "Welcome CODEMADE-API",
  });
});

models.sequelize
  .sync({
    force: false,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    )
  );

export default app;
