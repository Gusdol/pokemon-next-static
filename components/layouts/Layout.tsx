import { FC } from "react";
import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title title={title || "PokemonApp"}>{title}</title>
        <meta name="author" content="Gustavo Doldan" />
        <meta name="description" content={`Informacion del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
