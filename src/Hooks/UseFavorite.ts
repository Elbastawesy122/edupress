import { useContext } from "react";
import { FavoriteContext } from "../utils/FavoriteContext";

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoriteProvider");
  }
  return context;
};


