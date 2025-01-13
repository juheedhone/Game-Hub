import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/imageURL";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem listStyle={"none"} key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
              fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'}
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
            >
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
