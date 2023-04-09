import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { SyntheticEvent, useState } from "react";
import { NavigationBar } from "../../components/NavigationBar";

interface Recipe {
  ingredients: string;
  instructions: string;
}

export default function Home() {
  const [recipeLink, setRecipeLink] = useState("");
  const [recipe, setRecipe] = useState<Recipe | null>();

  const handleSubmit = async (
    event: SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const link = recipeLink;
    setRecipeLink("");
    try {
      const response = await fetch("api/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link }),
      });
      const recipeResponse = await response.json();
      setRecipe(recipeResponse);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Head>
        <title>PlateMate</title>
        <meta name="description" content="Plate Mate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavigationBar />
        <div className={styles.center}>
          <Image
            src="/eating_together.svg"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="link"
            value={recipeLink}
            onChange={(event) => setRecipeLink(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {recipe && (
          <div dangerouslySetInnerHTML={{ __html: recipe?.ingredients }}></div>
        )}
        {recipe && (
          <div dangerouslySetInnerHTML={{ __html: recipe?.instructions }}></div>
        )}
      </main>
    </>
  );
}
