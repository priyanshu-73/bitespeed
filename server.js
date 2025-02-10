import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import router from "./routes/contact.routes.js";

dotenv.config();

const app = express();

// DB connection
db(process.env.MONGO_URI);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/contact", router);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
