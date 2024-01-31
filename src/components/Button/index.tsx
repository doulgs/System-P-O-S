import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onPress, disabled }: ButtonProps) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#FFF">
        {children}
      </Text>
    </Container>
  );
};
