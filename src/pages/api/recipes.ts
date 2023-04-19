import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // @ts-ignore
  const { user } = await getSession(req, res);
  if (req.method === "GET") {
    await handleGetRecipes(req, res, user);
  }
  if (req.method === "POST") {
    await handlePostRecipe(req, res, user);
  }
});

async function handleGetRecipes(
  req: NextApiRequest,
  res: NextApiResponse,
  // @ts-ignore
  user
) {
  try {
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
}

async function handlePostRecipe(
  req: NextApiRequest,
  res: NextApiResponse,
  // @ts-ignore
  user
) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const recipes = await db
      .collection("recipes")
      .insertOne({ ...JSON.parse(req.body), user_id: user.sub });

    res.json(recipes);
  } catch (e) {
    console.error(e);
  }
}
