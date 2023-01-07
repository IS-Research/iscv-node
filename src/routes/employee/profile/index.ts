import express from "express";
import { postAvatar } from "~controllers/employee/profile/index.js";

const routers = express.Router();

routers.post("/avatar/:id", postAvatar);

export default routers;
