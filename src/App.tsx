import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Component/GameGrid";
import NavBar from "./Component/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show when="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
