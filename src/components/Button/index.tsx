import { Text } from "../Text";
import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  onPress,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <Container onPress={onPress} disabled={disabled} {...rest}>
      <Text weight="600" color="#FFF">
        {children}
      </Text>
    </Container>
  );
};
