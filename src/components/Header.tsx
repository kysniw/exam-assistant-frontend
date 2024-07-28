import { Button, Center, Flex, Icon } from "@chakra-ui/react";
import { TbLogin2 } from "react-icons/tb";

const Header = () => {
  return (
    <Flex gap={4} padding="10px" justify="flex-end">
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
