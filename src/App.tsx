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
} from "@chakra-ui/react";
import Layout from "./components/Layout";
import LeftSideBar from "./components/LeftSideBar.d";
import { Project } from "./types";
import theme from "./components/Theme";
import { AddIcon } from "@chakra-ui/icons";
import List from "./components/List";

type SubTaskTitle = string;

function App(): JSX.Element {
  const [project, setProject] = useState<Project | null>(null);
  const [subTaskTitle, setSubTaskTitle] = useState<SubTaskTitle>("");

  const getProject = (project: Project): void => {
    setProject(project);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSubTaskTitle(e.target.value.trim());
  };

  const handleCreateSubTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <ChakraProvider theme={theme}>
      <Layout leftSideBar={<LeftSideBar getProject={getProject} />}>
        {project && Object.values(project).length > 0 && (
          <VStack alignItems="flex-start">
            <Heading>{project.projectName}</Heading>
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
                renderItem={(item) => item.title}
              />
            )}
          </VStack>
        )}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
