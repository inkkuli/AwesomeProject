import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from './MyIcon';

export default function Section5() {
    return (
              <View style={{flex:1,flexDirection:'row',paddingTop:10}}>
                            <MyIcon title="wifi" name="wifi" size={30} color="#4BA7D9" />
                            <MyIcon title="coffee" name="coffee" size={30} color="#4BA7D9" />
                            <MyIcon title="bath" name="bath" size={30} color="#4BA7D9" />
                            <MyIcon title="car" name="car" size={30} color="#4BA7D9" />
                            <MyIcon title="paw" name="paw" size={30} color="#4BA7D9" />
                            
             

</View>

              

    );
}