import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../week3/MyIcon";

export default function Heartbeat() {  
              const [sum,setsum] = useState('0');  
              const onPressButton = () => {
                            
                            let count = Number(sum)+1;
                            setsum(count);
                            
                            
              };
              
    return (
        <View>
            <View style={{flexDirection: 'row',padding:20,justifyContent: "space-around"}} >
              <TouchableOpacity onPress={onPressButton}>
                            <FontAwesome name="heart" size={25} color="orange" />
                            
              </TouchableOpacity>
              <Text>{sum}</Text>
              
                            
            </View>
        </View>
    );
}
