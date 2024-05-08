import React from 'react';
import { Image, View } from 'react-native';
export default function Section1() {
    return (
        <View style={{ flew:1 }}>
              <View style={{ flexDirection: "row" }}>
              <Image style={{flex:1,resizeMode:'cover',aspectRatio:14/5}} source={require("/Users/kulisara/AwesomeProject/assets/week3/room-6.jpg")} />


              </View>
        </View>    
    );
}
