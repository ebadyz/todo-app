import { Box, Heading } from "@chakra-ui/react";

interface ILayoutProps {
  children: React.ReactNode;
  leftSideBar: React.ReactElement;
}

function Layout({ children, leftSideBar }: ILayoutProps): JSX.Element {
  return (
    <Box display="grid" placeItems="center" h="100vh">
      <header>
        <Heading>TODO App</Heading>
      </header>
      <Box
        display="flex"
        border="2px"
        w="90%"
        h="90vh"
        borderColor="yellow.500"
        mx="auto"
      >
        {leftSideBar}
        <Box as="main" p="8" w="70%">
          {children}
        </Box>
        {/* <RightSideBar /> */}
      </Box>
    </Box>
  );
}

export default Layout;
