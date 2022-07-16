import { Box, Button } from "@chakra-ui/react";

function LeftSideBar() {
  return (
    <Box w="33%" border="1px" borderColor="blue" position="relative">
      <div>Hello</div>
      <Button position="absolute" bottom="0">
        Add project
      </Button>
    </Box>
  );
}

export default LeftSideBar;
