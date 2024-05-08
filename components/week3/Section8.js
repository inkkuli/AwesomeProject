import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from './MyIcon';
import { Button } from 'react-native';


export default function Section8() {
    return (
              <View style={{paddingTop:10}}>
                   <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:10,borderTopWidth:1,borderTopColor:'lightgray'}}>
                            <View style={{flexDirection:'column'}}>
                                          <Text>Price</Text>
                                          <Text style={{fontWeight:'bold',fontSize:15,color:'red'}}>$399.99</Text>
                                          <Text style={{fontWeight:'bold'}}>AVG/Price</Text>
                            </View>
                            <View style={{backgroundColor:'red',borderRadius : 20,width:110,paddingTop:7}}>
                                          <Button title="Book Now" color= "white"/>

                            </View>
                    </View>
                            
                            

              </View>

         
            
              

    );
}