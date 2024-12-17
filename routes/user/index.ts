import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../config";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/register", async (req: Request, res: Response) => {
  const origin = req.originalUrl;
  try {
    const { password } = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashPw = bcrypt.hashSync(password, salt);
    const regi = await prisma.user.create({
      data: { ...req.body, password: hashPw },
    });
    console.log(regi);
    res.status(201).send(config.SUCCESS_MSG(origin));
  } catch (err: any) {
    if (err.code === "P2002") res.status(401).send(config.FAlSE_MSG(origin));
    return;
    console.error(err);
  }
});
export default router;
