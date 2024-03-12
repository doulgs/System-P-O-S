import { UsuarioProp } from "../../../../context/authContext";
import { Item } from "../../../../database/interfaces/Interface-Item";
import { imageHeader } from "./imageHeader";

export const handleImpressao = async (order: Item[], user: UsuarioProp) => {
  const { img } = await imageHeader();
  const arquivoJSON = JSON.stringify([
    {
      type: "image",
      imagePath: `${img}`,
    },
  ]);

  return arquivoJSON;
};
