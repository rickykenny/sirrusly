import { Container, ContainerProps } from "@chakra-ui/react";

interface ContentProps extends ContainerProps {}
export const Content: React.FC<ContentProps> = ({
  children,
  ...containerProps
}) => {
  return (
    <Container mb={12} mt={8} maxW="container.lg" {...containerProps}>
      {children}
    </Container>
  );
};
