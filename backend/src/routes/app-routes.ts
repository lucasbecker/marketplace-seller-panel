import { Router } from "express";
import { authenticateToken } from "../middleware/auth-middleware";

const router = Router();

router.get("/protected", authenticateToken, (req, res) => {
  res.json({
    message: "Acesso autorizado!",
    user: req.user,
  });
});

export default router;
