import { Box, Button, Text } from "@chakra-ui/react";

export const Test: React.FC = () => {
  return (
    <Box p={16}>
      <Text>
        All of this text is editable. Simply click anywhere in the paragraph or
        heading text and start typing. You can copy and paste your own content
        in to see what it looks like with these font combinations.
      </Text>
      <Button onClick={testRequest}>Test this!</Button>
    </Box>
  );
};

async function testRequest() {
  const response = await fetch("weatherforecast", {
    method: "POST",
  });
  const data = await response.text();
  console.log(data);
  return data;
}
