import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export default function Ex10() {
  const navigation = useNavigation();
  return (

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#4A90E2' }}>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex11")} />
    </View>
  );
}