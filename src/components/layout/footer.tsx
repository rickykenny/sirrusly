import { Flex, Grid, GridItem, Text, Link } from "@chakra-ui/react";
import { Content } from "./content";

export const Footer: React.FC = () => {
  const contactEmail = `contact@_cirrusly.com`;
  return (
    <Flex
      direction="column"
      backgroundColor="brand.900"
      height={"300px"}
      color="white"
      align="center"
      pb={6}
    >
      <Content mt={8}>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <GridItem colSpan={3}>
            <Text fontSize={30} fontWeight={900}>
              _cirrusly PTY LTD
            </Text>
            <Text>35 Wallaby Way, Sydney, Australia</Text>
            <Text>4000</Text>
          </GridItem>
          <GridItem colSpan={1}>
            Contact us at:{" "}
            <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
          </GridItem>
        </Grid>
      </Content>
    </Flex>
  );
};
