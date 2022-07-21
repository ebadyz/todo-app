import { useState } from "react";
import { Box, Button, Circle, HStack, Input, VStack } from "@chakra-ui/react";
import { useDisclosure, ModalFooter, ModalBody } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";
import List from "./List";

interface Project {
  id: string;
  projectName: string;
  projectColor: string;
}

type ProjectName = string;
type ProjectColor = string;
type Projects = Project[];

const COLORS_SCHEMA = [
  { id: uuidv4(), color: "#FFE11C" },
  { id: uuidv4(), color: "#2ECC71" },
  { id: uuidv4(), color: "#FF38AD" },
  { id: uuidv4(), color: "#01C3FF" },
  { id: uuidv4(), color: "#941B80" },
  { id: uuidv4(), color: "#3C4B6D" },
  { id: uuidv4(), color: "#F93852" },
];

function LeftSideBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectName, setProjectName] = useState<ProjectName>("");
  const [projectColor, setProjectColor] = useState<ProjectColor>("");
  const [projects, setProjects] = useState<Projects>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProjectName(e.target.value);
  };

  const handleSelect = (color: string): void => {
    setProjectColor(color);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    color: string
  ): void => {
    e.preventDefault();
    const randomIndex = Math.floor(
      Math.random() * (COLORS_SCHEMA.length - 1 - 0)
    );
    const randomColorSchema = COLORS_SCHEMA[randomIndex];
    const { color: randomProjectColor } = randomColorSchema;

    setProjects((prev) => [
      ...prev,
      {
        id: uuidv4(),
        projectName: name,
        projectColor: color ? color : randomProjectColor,
      },
    ]);
    setProjectName("");
    setProjectColor("");
    onClose();
  };

  return (
    <Box as="aside" w="33%" border="1px" borderColor="blue" position="relative">
      {projects.length > 0 && (
        <List
          flexDir="column"
          items={projects}
          renderItem={(item) => (
            <HStack>
              <Circle size={6} bg={item.projectColor} />
              <p>{item.projectName}</p>
            </HStack>
          )}
        />
      )}
      <Button position="absolute" bottom="0" onClick={onOpen} w="100%">
        Add project
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} title="Add Project">
        <form onSubmit={(e) => handleSubmit(e, projectName, projectColor)}>
          <ModalBody>
            <VStack>
              <Input
                type="text"
                placeholder="New Project Name"
                value={projectName}
                onChange={handleChange}
                autoFocus
              />
              <List
                items={COLORS_SCHEMA}
                renderItem={(item) => (
                  <Circle
                    cursor="pointer"
                    size={6}
                    bg={item.color}
                    onClick={() => handleSelect(item.color)}
                  />
                )}
                gap={6}
              />
            </VStack>
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
