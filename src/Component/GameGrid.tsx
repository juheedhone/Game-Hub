import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px ' gap={10}>
        {games.map((games) => (
          <GameCard key={games.id} game={games} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
