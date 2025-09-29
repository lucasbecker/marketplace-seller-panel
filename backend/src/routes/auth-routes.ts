import { Router } from "express";
import { login, register } from "../controllers/auth-controller";
import { authenticateToken } from "../middleware/auth-middleware";

const router = Router();

router.post("/login", login);
router.post("/register", register);

router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Perfil do usuário",
    user: {
      id: req.user?.userId,
      email: req.user?.email,
    },
  });
});

export default router;
