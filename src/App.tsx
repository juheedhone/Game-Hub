import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Component/GameGrid";
import GameHeading from "./Component/GameHeading";
import GenreList from "./Component/GenreList";
import NavBar from "./Component/NavBar";
import PlatformSelector from "./Component/PlatformSelector";
import SortSelector from "./Component/SortSelector";
import type { Platform } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        />
      </GridItem>

      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList
          selectedGenre={GameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading gameQuery={GameQuery} />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
            ></PlatformSelector>
            <SortSelector
              sortOrder={GameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
