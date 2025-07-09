import express from "express";
import {
  createCategory,
  getAllCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/category", createCategory);
router.put("/category/:id", createCategory);
router.delete("/category/:id", createCategory);
router.get("/category/:id", getCategory);
router.get("/categories", getAllCategory);

export default router;
