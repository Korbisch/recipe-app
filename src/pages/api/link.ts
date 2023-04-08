import type { NextApiRequest, NextApiResponse } from "next";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

type Data = {
  ingredients: string;
  instructions: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { link } = req.body;
    const htmlContent = (await fetchHtmlContent(link)) as string;
    const ingredients = getIngredients(htmlContent);
    const instructions = getInstructions(htmlContent);
    res.status(200).json({ ingredients, instructions });
  }
}

async function fetchHtmlContent(link: string) {
  try {
    const response = await fetch(link);
    return await response.text();
  } catch (error) {
    console.error(error);
  }
}

function getIngredients(html: string): string {
  const dom = new JSDOM(html);
  const element = dom.window.document.querySelector(
    ".wprm-recipe-ingredients-container"
  );
  return cleanUpHtml(element.innerHTML);
}

function getInstructions(html: string): string {
  const dom = new JSDOM(html);
  const element = dom.window.document.querySelector(
    ".wprm-recipe-instructions-container"
  );
  return cleanUpHtml(element.innerHTML);
}

function cleanUpHtml(html: string) {
  return removeScriptTags(removeAttributes(removeAnchorTags(html)));
}

function removeAttributes(html: string) {
  return html.replace(/<[^>]*>/g, (match) => {
    return match.replace(/ [^=]+=["'][^"']*["']/g, "");
  });
}

function removeAnchorTags(html: string) {
  return html.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "");
}

function removeScriptTags(html: string) {
  return html.replace(/<script\b[^>]*>(.*?)<\/script>/gi, "");
}
