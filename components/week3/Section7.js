import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from './MyIcon';

export default function Section7() {
    return (
              <View style={{flex:1}}>
                            <View style={{padding:5}}>
                                          <Text style={{fontWeight:'bold',fontSize:15}}>Room Type</Text>
                            </View>
                            
                            <View style={{flexDirection:'row',padding:5}}>
                                          <View>
                                          <Image style={{flex:1,resizeMode:'cover',width:110,height:145,borderRadius:15}} source={require("/Users/kulisara/AwesomeProject/assets/week3/room-8.jpg")} />

                                          </View>
                                          <View style={{paddingLeft:15,paddingTop:15}}>
                                                        <Text style={{fontWeight:'bold',fontSize:15}}>Standard Twin Room</Text>

                                                        <Text style={{fontWeight:'bold',fontSize:20,color:'red',paddingTop:60}}>$399.99</Text>
                                                        <Text stype={{color:'blue'}}>Hurry Up! This is your last room!</Text>

                                           </View>

                            </View>
                            
                            

              </View>


              

    );
}