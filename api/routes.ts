import { Router } from "express";
import { verifyProject, trackProject } from "../controllers/projectController";

const router = Router();

router.get("/verify/:token", verifyProject);
router.get("/track/:token", trackProject);

export default router;
