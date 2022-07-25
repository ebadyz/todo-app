import { Box } from "@chakra-ui/react";

type IRightSideBarProps = {
  toggle: boolean;
};

const RightSideBar = ({ toggle }: IRightSideBarProps): JSX.Element => {
  return (
    <>
      {toggle && (
        <Box as="aside" border="1px" p="4" borderColor="whiteAlpha.600" w="30%">
          Description should be here...
        </Box>
      )}
    </>
  );
};

export default RightSideBar;
