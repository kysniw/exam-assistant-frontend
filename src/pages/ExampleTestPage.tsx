import {
  Box,
  Container,
  Heading,
  useCheckbox,
  useCheckboxGroup,
  UseCheckboxProps,
  VStack,
} from "@chakra-ui/react";

const data = {
  id: 1,
  question: "Lorem ipsum lalalala ske?",
  isMultiple: false,
  answers: [
    { good: true, text: "Hello yes" },
    { good: false, text: "Hell no" },
    { good: false, text: "Yes its no" },
    { good: false, text: "And no again" },
  ],
};

const CheckboxCard = (props: UseCheckboxProps) => {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" w="100%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth={2}
        borderRadius="md"
        _checked={{
          borderColor: "blue.300",
        }}
        px={5}
        py={3}
      >
        {props.value}
      </Box>
    </Box>
  );
};

const ExampleTestPage = () => {
  const { getCheckboxProps } = useCheckboxGroup({
    onChange: console.log,
  });

  return (
    <Container maxW="3xl" pt={20}>
      <Heading py={4}>{data.question}</Heading>
      <VStack w="100%">
        {data.answers.map((answer) => {
          const checkbox = getCheckboxProps({ value: answer.text });
          return <CheckboxCard key={answer.text} {...checkbox} />;
        })}
      </VStack>
    </Container>
  );
};

export default ExampleTestPage;
