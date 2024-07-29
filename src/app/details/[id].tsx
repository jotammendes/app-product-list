import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useProductDatabase } from "@/database/useProductDatabase";

export default function Details() {
  const [data, setData] = useState({
    name: "",
    quantity: 0,
  });

  const params = useLocalSearchParams<{ id: string }>();
  const productDatabase = useProductDatabase();

  useEffect(() => {
    if(params.id) {
      productDatabase.show(Number(params.id)).then((response) => {
        if(response) {
          setData({
            name: response.name,
            quantity: response.quantity,
          });
        }
      });
    }
  }, [params.id]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>ID: {params.id}</Text>
      <Text style={{ fontSize: 32 }}>Nome: {data.name}</Text>
      <Text style={{ fontSize: 32 }}>Quantidade: {data.quantity}</Text>
    </View>
  );
}