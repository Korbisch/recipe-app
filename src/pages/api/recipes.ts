import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const users = await db.collection("users").findOne({});

    res.json(users);
  } catch (e) {
    console.error(e);
  }
}
