import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import models from "./models";
import AuthRoutes from "./routes/AuthRoutes";
import CourseRoutes from "./routes/CourseRoutes";
import ModuleRoutes from "./routes/ModuleRoutes";
import ChapterRoutes from "./routes/ChapterRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import VideoRoutes from "./routes/VideoRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//Code Made(API)
app.use("/api/auth", AuthRoutes);
app.use("/api/course", CourseRoutes);
app.use("/api/module", ModuleRoutes);
app.use("/api/chapter", ChapterRoutes);
app.use("/api/comment", CommentRoutes);
app.use("/api/video", VideoRoutes);

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
