import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section3() {
    return (
              <View style={{ flex:1}}>
                            <View style={{ flexDirection: "row",paddingLeft:10}}>
                                          <View style={{height:50,width:50, borderRadius: 50/2 ,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                                                        <Text style={{color:'white',fontWeight:'bold'}}>9.5</Text>

                                          </View>

                                          <View style={{paddingTop:5}}>
                                                        <Text style={{paddingLeft:10,color:'red',fontSize:18,fontWeight:'bold'}}>Excellent</Text>
                                                        <Text style={{paddingLeft:10}}>See 801 reviews</Text>
                                          </View>
                            </View>
              </View>
              

    );
}