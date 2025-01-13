import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";
import NavBar from "./Component/NavBar";
import PlatformSelector from "./Component/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          selectedGenre={GameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={GameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...GameQuery, platform })
          }
        ></PlatformSelector>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
