import { Recipe } from "@/pages/_app";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface RecipeContextValue {
  recipes: Recipe[] | null;
  setRecipes: Dispatch<SetStateAction<Recipe[] | null>>;
}

const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const recipeContext = useContext(RecipeContext);
  if (recipeContext === undefined) {
    throw new Error("useRecipeContext must be inside a RecipeProvider");
  }
  return recipeContext;
};
