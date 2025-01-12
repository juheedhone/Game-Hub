import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardComponent from "./GameCardComponent";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  console.log(isLoading);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        gap={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardComponent>
              <GameCardSkeleton key={skeleton} />
            </GameCardComponent>
          ))}
        {games.map((games) => (
          <GameCardComponent>
            <GameCard key={games.id} game={games} />
          </GameCardComponent>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
