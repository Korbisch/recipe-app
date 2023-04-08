import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { SyntheticEvent, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface Recipe {
  ingredients: string;
  instructions: string;
}

export default function Home() {
  const { user, isLoading } = useUser();

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
        <div className={styles.description}>
          <h1>PlateMate</h1>
          <nav>
            {!isLoading && !user && (
              <nav id="qsLoginBtn">
                <a href="/api/auth/login" tabIndex={0}>
                  Log in
                </a>
              </nav>
            )}
            {user && (
              <div>
                <div>{user.name}</div>
                <div>
                  <Link href="/profile">Profile</Link>
                </div>
                <div>
                  <a href="/api/auth/logout">Log out</a>
                </div>
              </div>
            )}
          </nav>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
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
