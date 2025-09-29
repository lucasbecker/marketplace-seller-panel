import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Servidor JWT Auth está funcionando!",
  });
});

export default router;
