import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./Component/GameGrid";
import GenreList from "./Component/GenreList";
import NavBar from "./Component/NavBar";

const App = () => {
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
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
