import express, { Request, Response } from "express";
const router = express.Router();
router.post("/login", async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
  } catch (err) {
    console.error(err);
  }
});

export default router;
