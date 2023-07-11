import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(req.method === "GET")) {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const transactions = await prisma.transaction.findMany({});
    res.status(200).json({ transations: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch all transactions" });
  }
}
