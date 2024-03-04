import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);

export default router;