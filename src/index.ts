import express from "express";
import dotenv from "dotenv";
import routes from "./api/routes";
import { config } from "./config/config";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`ATTACH running on port ${config.port}`);
});
