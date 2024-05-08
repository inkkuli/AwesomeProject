import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from './MyIcon';

export default function Section5() {
    return (
              <View style={{flex:1,paddingTop:10,flexDirection:'column'}}>
                            <View style={{borderTopWidth:1,borderTopColor:'lightgray',padding:10}}>
                                          <Text style={{fontWeight:'bold',fontSize:15}}>Location</Text>
                                          <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
                            </View>

                            <View style={{ flexDirection: "row", padding: 10}}>
                            <Image style={{flex:1,resizeMode:'cover',aspectRatio:13/4}} source={require("/Users/kulisara/AwesomeProject/assets/week3/map.jpg")} />
                            </View>
              </View>


              

    );
}