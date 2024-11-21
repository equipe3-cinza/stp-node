import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500", "http://localhost", "http://127.0.0.1", "http://stp.wil.app.br"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
