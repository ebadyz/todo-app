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
        border="1px"
        w="90%"
        h="90vh"
        borderColor="whiteAlpha.600"
        mx="auto"
      >
        {leftSideBar}
        <Box as="main" p="4" w="70%">
          {children}
        </Box>
        {/* <RightSideBar /> */}
      </Box>
    </Box>
  );
}

export default Layout;
