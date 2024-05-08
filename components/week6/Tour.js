import React from "react";
import { ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (
              <View style={props.style}>
                            <Text style ={{fontsize:20}}>Tour</Text>
                            <Text style={{color:'grey',marginVertical:20}}>Let find out what most interesting things</Text>

                            <ScrollView horizontal={true}>
                                          <View style={{flexDirection:'row'}}>
                                                        <View style={{marginRight:10}}>
                                                                      <TourItem />
                                                        </View>
                                                        <View style={{marginRight:10}}>
                                                                      <TourItem />
                                                        </View>
                                                        <View style={{marginRight:10}}>
                                                                      <TourItem />
                                                        </View>
                                                       
                                                        


                                          </View>
                            </ScrollView>
              </View>
    );
}
