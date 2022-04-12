import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import { FavoritesPokemon, NoFavorites } from "../../components/ui";

const FavoritePage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon - favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
