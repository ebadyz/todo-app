import { Box, Heading } from "@chakra-ui/react";

interface ILayoutProps {
  children: React.ReactNode;
  leftSideBar: React.ReactElement;
  rightSideBar: React.ReactElement;
  handleSetToggle: (newState: boolean) => void;
}

function Layout({
  children,
  leftSideBar,
  rightSideBar,
  handleSetToggle,
}: ILayoutProps): JSX.Element {
  return (
    <Box display="grid" placeItems="center" h="100vh">
      <header>
        <Heading>TODO App</Heading>
      </header>
      <Box
        as="main"
        display="flex"
        border="1px"
        w="90%"
        h="90vh"
        borderColor="whiteAlpha.600"
        mx="auto"
        onClick={() => handleSetToggle(false)}
      >
        {leftSideBar}
        {children}
        {rightSideBar}
      </Box>
    </Box>
  );
}

export default Layout;
