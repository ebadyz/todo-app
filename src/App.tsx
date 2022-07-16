import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>main is here</Layout>
    </ChakraProvider>
  );
}

export default App;
