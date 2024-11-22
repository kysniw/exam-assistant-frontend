import { Flex, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Stack flexGrow="1">
        <Outlet />
      </Stack>

      <Footer />
    </Flex>
  );
};

export default Layout;
