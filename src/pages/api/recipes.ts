import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // @ts-ignore
    const { user } = await getSession(req, res);
    const client = await clientPromise;
    const db = client.db("test");

    const recipes = await db
      .collection("recipes")
      .find({ user_id: user.sub })
      .toArray();

    res.json(recipes);
  } catch (e) {
    console.error(e);
  }
});
