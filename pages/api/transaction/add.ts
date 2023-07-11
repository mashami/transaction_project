import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/Prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(req.method === "POST")) {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("connected ==============>");

    const { name, amount } = req.body;

    const createdTransion = await prisma.transaction.create({
      data: {
        name,
        amount,
      },
    });
    res.status(200).json(createdTransion);
  } catch (error) {
    console.error(error);
  }
}
