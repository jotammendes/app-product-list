import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {
  data: {
    name: string;
    quantity: number;
  }
  onOpen: () => void;
  onDelete: () => void;
}

export function Product({ data, onOpen, onDelete, ...rest }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
      }}
      {...rest}
    >
      <Text style={{ flex: 1 }}>
        {data.quantity} - {data.name}
      </Text>

      <TouchableOpacity onPress={onOpen}>
        <MaterialIcons name="visibility" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </Pressable>
  );
}