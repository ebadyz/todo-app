import { ChangeEvent, FormEvent, useState } from "react";
import {
  ChakraProvider,
  Circle,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import Layout from "./components/Layout";
import LeftSideBar from "./components/LeftSideBar";
import { Project, Projects, toggleRightSideBar } from "./types";
import theme from "./components/Theme";
import { AddIcon } from "@chakra-ui/icons";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import RightSideBar from "./components/RightSideBar";

type SubTaskTitle = string;

function App(): JSX.Element {
  const [projects, setProjects] = useState<Projects>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [subTaskTitle, setSubTaskTitle] = useState<SubTaskTitle>("");
  const [toggleRightSideBar, setToggleRightSideBar] =
    useState<toggleRightSideBar>(false);

  const handleSetSelectedProject = (project: Project): void => {
    setProject(project);
  };

  const handleSetProjects = (project: Project): void => {
    setProjects((prev) => [...prev, project]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSubTaskTitle(e.target.value);
  };

  const handleCreateSubTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //! TODO: Refactor finding a selected project and add a subtask
    if (projects.length > 0 && project) {
      const selectedProject = projects.find((item) => item.id === project.id);
      if (selectedProject) {
        selectedProject.subTasks?.push({
          id: uuidv4(),
          title: subTaskTitle.trim(),
        });
      }
    }
    setSubTaskTitle("");
  };

  const handleSetToggle = (newState: boolean): void => {
    setToggleRightSideBar(newState);
  };

  return (
    <ChakraProvider theme={theme}>
      <Layout
        handleSetToggle={handleSetToggle}
        rightSideBar={<RightSideBar toggle={toggleRightSideBar} />}
        leftSideBar={
          <LeftSideBar
            projects={projects}
            handleSetProjects={handleSetProjects}
            handleSetSelectedProject={handleSetSelectedProject}
          />
        }
      >
        {project && Object.values(project).length > 0 && (
          <VStack
            flex="1"
            p="4"
            alignItems="flex-start"
            spacing={10}
            overflow="hidden"
          >
            <Heading as="h1" size="xl">
              {project.projectName}
            </Heading>
            <form
              style={{ width: "100%" }}
              onSubmit={(e) => handleCreateSubTask(e)}
            >
              <InputGroup>
                <InputLeftElement children={<AddIcon />} h={12} />
                <Input
                  type="text"
                  placeholder={`add a task to "${project.projectName}", press Enter ro save`}
                  value={subTaskTitle}
                  onChange={handleChange}
                  w="100%"
                  h={12}
                />
                <InputRightElement
                  children={<Circle bg={project.projectColor} size={3} />}
                  h={12}
                />
              </InputGroup>
            </form>
            {project.subTasks && (
              <List
                items={project.subTasks}
                renderItem={(item) => (
                  <Box
                    display="flex"
                    alignItems="center"
                    px="4"
                    bg="whiteAlpha.100"
                    h={12}
                    onClick={(e) => {
                      e.stopPropagation();
                      setToggleRightSideBar(true);
                    }}
                  >
                    <Text>{item.title}</Text>
                  </Box>
                )}
                display="flex"
                flexDir="column"
                h="390px"
                overflow="auto"
                gap="3"
                w="100%"
              />
            )}
          </VStack>
        )}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
