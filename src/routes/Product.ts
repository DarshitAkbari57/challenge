import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/Product";

const router: Router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
