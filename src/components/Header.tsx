import { Button, Center, Flex, Icon } from "@chakra-ui/react";
import { TbLogin2 } from "react-icons/tb";

const Header = () => {
  return (
    <Flex
      gap={4}
      pos="fixed"
      top="2"
      left="2"
      right="2"
      h="16"
      p="4"
      bg="rgba(255,255,255,0.6)"
      backdropFilter="blur(5px)"
      borderRadius="lg"
      justify="flex-end"
      boxShadow="md"
      zIndex="100"
    >
      <Center>
        <Button
          colorScheme="teal"
          variant="outline"
          rightIcon={<Icon as={TbLogin2} boxSize={5} />}
        >
          Zaloguj się
        </Button>
      </Center>
      <Center hideBelow="sm">
        <Button>Zarejestruj się</Button>
      </Center>
    </Flex>
  );
};

export default Header;
