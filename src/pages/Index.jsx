import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="brand.900" color="white">
      <VStack spacing={8}>
        <Image src="https://via.placeholder.com/150" alt="Band Logo" boxSize="150px" />
        <Heading as="h1" size="2xl">The Rockers</Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our world tour and experience the thrill of live music!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="red" variant="solid" size="lg">
          Buy Tickets
        </Button>
        <Button leftIcon={<FaMusic />} colorScheme="teal" variant="outline" size="lg">
          Listen Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;