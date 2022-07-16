import { Box, Heading } from "@chakra-ui/react";
import LeftSideBar from "./LeftSideBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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
        <LeftSideBar />
        <Box as="main">{children}</Box>
        {/* <RightSideBar /> */}
      </Box>
    </Box>
  );
}

export default Layout;
