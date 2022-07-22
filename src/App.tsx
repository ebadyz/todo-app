import { useState } from "react";
import { ChakraProvider, Heading, Input, VStack } from "@chakra-ui/react";
import Layout from "./components/Layout";
import LeftSideBar from "./components/LeftSideBar.d";
import { Project } from "./types";
import theme from "./components/Theme";

function App(): JSX.Element {
  const [project, setProject] = useState<Project>({} as Project);

  const getProject = (project: Project): void => {
    setProject(project);
  };

  return (
    <ChakraProvider theme={theme}>
      <Layout leftSideBar={<LeftSideBar getProject={getProject} />}>
        {Object.values(project).length > 0 && (
          <VStack alignItems="flex-start">
            <Heading>{project.projectName}</Heading>
            <Input
              type="text"
              placeholder={`add a task to "${project?.projectName}", press Enter ro save`}
              w="100%"
            />
          </VStack>
        )}
      </Layout>
    </ChakraProvider>
  );
}

export default App;
