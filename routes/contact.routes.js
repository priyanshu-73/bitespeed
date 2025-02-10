import express from "express";
import { identify } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/identify", identify);

export default router;
