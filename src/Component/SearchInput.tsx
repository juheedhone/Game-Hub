import { HStack, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "../components/ui/input-group";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <HStack>
        <InputGroup flex={1} startElement={<BsSearch />}>
          <Input ref={ref} borderRadius={20} placeholder="search games.." />
        </InputGroup>
      </HStack>
    </form>
  );
};

export default SearchInput;
