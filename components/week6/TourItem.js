import React from "react";
import { View, Image, Text } from "react-native";

export default function TourItem(props) {
    return (
        <View>
            <Image style ={{width:200,height:150,borderRadius:10}}source={{uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} ></Image>
        <View style ={{marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
              <Text style={{fontsize:20,color:'white'}}>Tour in Somewhere</Text>
        </View>
        </View>
    );
}
