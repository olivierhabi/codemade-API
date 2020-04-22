import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import models from "./models";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log({ message: "Welcome CODEMADE-API" });
  return res.status(200).send({
    status: 200,
    message: "Welcome CODEMADE-API",
  });
});

models.sequelize
  .sync({
    force: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    )
  );

// app.listen(process.env.PORT, () =>
//   console.log(`Listening on port ${process.env.PORT}`)
// );

export default app;
