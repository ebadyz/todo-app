import { useState } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useDisclosure, ModalFooter, ModalBody } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";
import List from "./List";

interface Project {
  id: string;
  projectName: string;
}

type ProjectName = string;
type Projects = Project[];

function LeftSideBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectName, setProjectName] = useState<ProjectName>("");
  const [projects, setProjects] = useState<Projects>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProjectName(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    name: string
  ): void => {
    e.preventDefault();
    setProjects((prev) => [...prev, { id: uuidv4(), projectName: name }]);
    setProjectName("");
    onClose();
  };

  return (
    <Box as="aside" w="33%" border="1px" borderColor="blue" position="relative">
      {projects.length > 0 && <List items={projects} />}
      <Button position="absolute" bottom="0" onClick={onOpen}>
        Add project
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} title="Add Project">
        <form onSubmit={(e) => handleSubmit(e, projectName)}>
          <ModalBody>
            <Input
              type="text"
              placeholder="New Project Name"
              value={projectName}
              onChange={handleChange}
              autoFocus
            />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" colorScheme="blue">
                Add
              </Button>
            </HStack>
          </ModalFooter>
        </form>
      </Modal>
    </Box>
  );
}

export default LeftSideBar;
