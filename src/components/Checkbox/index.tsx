import { useState } from "react";
import { CheckIcon } from "../../assets/icons/Icon-Check";
import { Container, Touchable } from "./styles";

export function Checkbox() {
  const [selected, setSelected] = useState(0);

  const handleSelect = () => {
    if (selected > 0) {
      setSelected(0);
      return;
    }
    setSelected(selected + 1);
  };

  return (
    <Container>
      <Touchable onPress={handleSelect}>
        {selected !== 0 && <CheckIcon />}
      </Touchable>
    </Container>
  );
}
