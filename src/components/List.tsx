import { List as ChakraList, ListItem } from "@chakra-ui/react";

interface Item {
  id: string;
}

type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  flexDir?: FlexDirection;
  gap?: number;
}

function List<T extends Item>({
  items,
  renderItem,
  flexDir = "row",
  gap,
}: ListProps<T>) {
  return (
    <ChakraList display="flex" flexDir={flexDir} gap={gap}>
      {items.map((item) => (
        <ListItem key={item.id}>{renderItem(item)}</ListItem>
      ))}
    </ChakraList>
  );
}

export default List;
