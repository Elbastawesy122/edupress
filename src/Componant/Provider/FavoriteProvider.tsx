import { useState, useEffect, type ReactNode, useMemo } from "react";
import type Article from "../../apiproject/InterfaceAPI";
import { FavoriteContext } from "../../utils/FavoriteContext";
import { getCurrentUser } from "../../utils/Auth";

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Article[]>([]);

  const currentUsername = useMemo(() => {
    const user = getCurrentUser();
    return user?.username || null;
  }, []);

  useEffect(() => {
    if (!currentUsername) return;

    const storedFavorites = localStorage.getItem(
      `favorites_${currentUsername}`
    );
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    } else {
      setFavorites([]);
    }
  }, [currentUsername]);

  useEffect(() => {
    if (!currentUsername) return;
    localStorage.setItem(
      `favorites_${currentUsername}`,
      JSON.stringify(favorites)
    );
  }, [favorites, currentUsername]);

  const toggleFavorite = (article: Article) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === article.id)
        ? prev.filter((fav) => fav.id !== article.id)
        : [...prev, article]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
