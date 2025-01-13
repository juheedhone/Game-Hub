import { Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "../components/ui/input-group";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="search games.." />
    </InputGroup>
  );
};

export default SearchInput;
