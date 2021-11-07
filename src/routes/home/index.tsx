import { Text, VStack, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Content } from "../../components/layout/content";
import { Hero } from "../../components/layout/hero";

export const HomeRoute: React.FC = () => {
  return (
    <VStack spacing={16} w={"100%"} align="center">
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        h={"400px"}
      >
        <VStack align="flex-start" spacing={4}>
          <Heading fontSize={50}>
            <mark>The all new Macbook Pro</mark>
          </Heading>
          <Text fontSize={20}>
            <mark>
              <em>Bigger</em> and <em>better</em> than all of the previous
              generations, combined.
            </mark>
          </Text>
          <Button as={Link} to="/products" colorScheme="brand">
            Shop now
          </Button>
        </VStack>
      </Hero>

      <Content minH="50vh">
        <Heading as="h2">Products</Heading>
        <Text>
          All of this text is editable. Simply click anywhere in the paragraph
          or heading text and start typing. You can copy and paste your own
          content in to see what it looks like with these font combinations.
        </Text>
      </Content>
    </VStack>
  );
};
