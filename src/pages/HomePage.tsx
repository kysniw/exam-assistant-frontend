import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Highlight,
  Heading,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaPen, FaUpload } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <Heading
        m="1rem 0"
        textAlign="center"
        fontFamily="cursive"
        size="2xl"
        textShadow="0 0 5px #ccc"
      >
        <Highlight query="Exam" styles={{ color: "teal" }}>
          ExamAssist
        </Highlight>
      </Heading>
      <Heading
        mb="2rem"
        fontFamily="cursive"
        size="sm"
        textAlign="center"
        textShadow="0 0 3px #ccc"
      >
        <Highlight query="każdy" styles={{ color: "teal" }}>
          Ucz się efektywnie na każdy egzamin!
        </Highlight>
      </Heading>
      <Flex gap="4" pt="4" pb={4}>
        <Button
          flex="1"
          colorScheme="teal"
          rightIcon={<Icon as={FaPen} boxSize={4} />}
        >
          Utwórz
        </Button>
        <Button
          flex="1"
          colorScheme="teal"
          variant="outline"
          rightIcon={<Icon as={FaUpload} />}
        >
          Wczytaj
        </Button>
      </Flex>
      <Accordion
        allowToggle
        p="0.5rem"
        border="2px solid teal"
        rounded="xl"
        bg="teal.50"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Czym jest ExamAssist?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Jak ułatwi mi to naukę?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;
