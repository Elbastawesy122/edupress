import { createContext } from "react";
import type Article from "../apiproject/InterfaceAPI";

export interface FavoriteContextType {
  favorites: Article[];
  toggleFavorite: (article: Article) => void;
}

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);
