import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Container flex="1">
        <Outlet />
      </Container>
    </Flex>
  );
};

export default Layout;
