import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(routes);

app.listen(3000, () => console.log("Server is running."));
