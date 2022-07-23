import { List as ChakraList, ListItem } from "@chakra-ui/react";

interface Item {
  id: string;
}

interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  [styles: string]: any;
}

//! TODO: find better solution for ...rest in TS and dynamic more
function List<T extends Item>(props: IListProps<T>) {
  const { items, renderItem, ...styles } = props;
  return (
    <ChakraList {...styles}>
      {items.map((item) => (
        <ListItem key={item.id}>{renderItem(item)}</ListItem>
      ))}
    </ChakraList>
  );
}

export default List;
