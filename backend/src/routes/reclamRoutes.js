import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createReclam,getReclams,getReclam,updateReclam,deleteReclam } from "../controllers/reclam/reclamController.js";

const router = express.Router();

router.post("/reclam/create", protect, createReclam);

router.get("/reclams", protect, getReclams);

router.get("/reclam/:id", protect, getReclam);

router.patch("/reclam/:id", protect, updateReclam);

router.delete("/reclam/:id", protect, deleteReclam);


export default router;
