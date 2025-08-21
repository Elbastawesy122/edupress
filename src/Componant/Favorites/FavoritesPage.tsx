import { useFavorites } from "../../Hooks/UseFavorite";
import FavoriteCard from "./FavoriteCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  
  if (favorites.length === 0) {
    return (
      <p className="text-center text-gray-500 m-10 text-4xl font-semibold">
        No favorites yet.
      </p>
    );
  }
  return (
    <div className="favorites px-[10%] py-15">
      <div className="title">
        <h2 className="text-3xl font-semibold mb-4">My Favorites</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {favorites.map((article) => (
          <FavoriteCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
