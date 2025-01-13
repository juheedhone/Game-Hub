import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";
import NavBar from "./Component/NavBar";
import type { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      // templateAreas={[`'nav' 'main'`, `'nav nav' 'aside main`]}
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
