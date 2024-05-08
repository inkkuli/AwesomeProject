import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{marginTop:-50}}>
              <View style={{ margin : 20 , padding : 10, borderWidth : 1, borderColor : 'lightgray',backgroundColor:'lightgray', borderRadius : 20 }}>
                            
                            <Text style ={{textAlign :'center',fontSize:17}}> Hilton San Francisco</Text>  
                            <View style={{ flexDirection: "row",justifyContent:'center'}}>
                                          
                            <FontAwesome  name="star" size={15} color="yellow" />
                            <FontAwesome  name="star" size={15} color="yellow" />
                            <FontAwesome  name="star" size={15} color="yellow" />
                            <FontAwesome  name="star" size={15} color="yellow" />
                            <FontAwesome  name="star-half" size={15} color="yellow" />
                            
                            </View>
                            <Text style ={{textAlign :'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                            
              </View>
              
              

             
        </View>    
    );
}