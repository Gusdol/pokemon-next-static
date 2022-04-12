import type { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interface";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// se ejecuta solo en el lado del servidor, tampoco llega al cliente.
// solo en las paginas se puede hacer esto
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1, // el indice empieza desde 0 y debe empezar en este caso en 1.
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      i + 1
    }.png`,
  }));
  return {
    props: { pokemons },
  };
};

export default HomePage;
