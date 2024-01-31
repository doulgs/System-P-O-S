import { Text } from "../Text";
import { Category, Icon, Touchable } from "./styles";
import { categories } from "../../mocks/categories";
import { useState } from "react";
import { FlatList } from "react-native";

interface itemProps {
  _id: string;
  name: string;
  icon: string;
}

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
    console.log(category);
  }

  const renderizarCategoria = ({ item: grupos2 }: { item: itemProps }) => {
    const isSelected = selectedCategory === grupos2?._id;
    return (
      <Touchable onPress={() => handleSelectCategory(grupos2._id)}>
        <Category>
          <Icon>
            <Text opacity={isSelected ? 1 : 0.5}>{grupos2.icon}</Text>
          </Icon>
          <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
            {grupos2.name}
          </Text>
        </Category>
      </Touchable>
    );
  };

  return (
    <>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderizarCategoria}
        //estimatedItemSize={200}
        contentContainerStyle={{ paddingRight: 24 }}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
