import React, { SyntheticEvent, useState } from "react";

interface Recipe {
  ingredients: string;
  instructions: string;
}

export const PrintRecipe = () => {
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
    </>
  );
};
