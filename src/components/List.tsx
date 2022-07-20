import { List as ChakraList, ListItem } from "@chakra-ui/react";

interface Item {
  id: string;
  projectName: string;
}

interface ListProps<T> {
  items: T[];
}

function List<T extends Item>({ items }: ListProps<T>): JSX.Element {
  return (
    <ChakraList>
      {items.map((item) => (
        <ListItem key={item.id}>{item.projectName}</ListItem>
      ))}
    </ChakraList>
  );
}

export default List;
