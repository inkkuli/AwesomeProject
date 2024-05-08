import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native";



export default function Bmi() {
   const [weight, setWeight] = useState('70');
   const [height, setHeight] = useState('170');
   const [bmi, setBmi] = useState('0');
   const [body, setBody] = useState('normal');
   const onPressButton = () => {
      console.log("Calculate button is pressed!!!");
      let output = (weight / (height / 100 * height / 100));
      setBmi(output.toFixed(2));


      let set_Body;
      if (output < 18.5) { set_Body = "Underweight - eat a bagel!"; }
      else if (output >= 18.5 && output <= 24.99) { set_Body = "Normal - keep it up!"; }
      else if (output >= 25 && output <= 29.99) { set_Body = "Overweight - exercise more!"; }
      else if (output >= 30 && output <= 39.99) { set_Body = "Obese - get off the couch!"; }
      else { set_Body = "Morbidly Obese - take action!"; }
      setBody(set_Body);



   };

   console.log("STATE  : ", weight, height, bmi, body);


   return (
      <View>
         <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
            <TextInput placeholder="Input your Weight" value={weight} onChangeText={(newWeight) => setWeight(newWeight)} />
         </View>
         <View style={{ padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20 }}>Height (m.)</Text>
            <TextInput placeholder="Input your Height" value={height} onChangeText={(newHeight) => setHeight(newHeight)} />
         </View>
         <View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
               <View style={{ flex: 1, backgroundColor: 'white', marginRight: 10, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                  <Text style={{ fontSize: 20 }}>BMI :{bmi}</Text>

               </View>

               <View style={{ flex: 1, backgroundColor: 'white', marginLeft: 10, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                  <Text style={{ fontSize: 20 }}>{body}</Text>

               </View>

            </View>


         </View>
         <TouchableOpacity onPress={onPressButton}>
            <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
               <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                  Calculate
               </Text>
            </View>
         </TouchableOpacity>

      </View>
   );
} 
