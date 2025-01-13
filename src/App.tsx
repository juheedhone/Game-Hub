import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";
import NavBar from "./Component/NavBar";
import PlatformSelector from "./Component/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <GenreList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        ></PlatformSelector>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
