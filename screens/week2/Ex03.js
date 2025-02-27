import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export default function Ex03() {
  const navigation = useNavigation();
  return (

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#4A90E2', width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: '#9013FE', width: 100, height: 100 }}></View>
      </View>

      <Button title="Next" onPress={() => navigation.navigate("Ex04")} />
    </View>
  );
}