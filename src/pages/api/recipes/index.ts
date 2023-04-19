import clientPromise from "../../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const recipes = await db.collection("recipes").find({}).toArray();

    res.json(recipes);
  } catch (e) {
    console.error(e);
  }
}
