import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>

      <MenuContent>
        <MenuItem value="a">Relevance</MenuItem>
        <MenuItem value="b">Date added</MenuItem>
        <MenuItem value="c">Name</MenuItem>
        <MenuItem value="d">Release</MenuItem>
        <MenuItem value="e">Popularity</MenuItem>
        <MenuItem value="f">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default sortSelector;
