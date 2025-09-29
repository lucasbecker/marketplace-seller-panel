import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/products-controller";
import { authenticateToken } from "../middleware/auth-middleware";

const router = Router();

router.get("/", authenticateToken, getProducts);

router.post("/", authenticateToken, createProduct);

router.put("/:id", authenticateToken, updateProduct);

export default router;
