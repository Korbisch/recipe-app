import clientPromise from "../../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const users = await db
      .collection("recipes")
      .findOne({ _id: new ObjectId(id?.toString()) });

    res.json(users);
  } catch (e) {
    console.error(e);
  }
}
