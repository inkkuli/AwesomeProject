import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from '/Users/kulisara/AwesomeProject/components/week3/MyIcon.js';




export default function PaperQuiz() {
              return (
                            <View>
                                          <Card>
              
                                                        <Card.Cover source={require('/Users/kulisara/AwesomeProject/assets/week3/room-6.jpg' )} />
                                          </Card>    
                                          <Card style={{width:300,alignSelf:'center',margin:-40}}>          
                                                        <Card.Content style={{alignItems:'center'}}>
                                                                      <Text variant="titleLarge">Hilton San Francisco</Text>
                                                                      <Card.Content style={{flexDirection:"row"}}>
                                                                                    <FontAwesome  name="star" size={15} color="yellow" />
                                                                                    <FontAwesome  name="star" size={15} color="yellow" />
                                                                                    <FontAwesome  name="star" size={15} color="yellow" />
                                                                                    <FontAwesome  name="star" size={15} color="yellow" />
                                                                                    <FontAwesome  name="star-half" size={15} color="yellow" />
                                                                      </Card.Content>

                                                                      <Text variant="bodyMedium">Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                                                        </Card.Content>

                                          </Card>

                                          <Card.Content>
                                                        <Card.Content style={{flexDirection: "row"}}>
                                                                      <Card.Content style={{height:60,width:60, borderRadius: 60/2 ,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:50}}>
                                                                      <Text variant="bodyLarge" style={{color:"white"}}>9.5</Text>
                                                                      </Card.Content>

                                                                      <Card.Content style={{flexDirection: "column",paddingTop:60}}>
                                                                      <Text variant="titleMedium" style={{color:"red"}}>Excellent</Text>
                                                                      <Text variant="bodyMedium">See 801 reviews</Text>
                                                                      </Card.Content>

                                                        </Card.Content>
                                          </Card.Content>
                                           
                                          <Card.Content style={{paddingTop:10}}>
                                                        <Card.Content style={{borderTopWidth:1,borderTopColor:'lightgray',borderBottomWidth:1,borderBottomColor:'lightgray',padding:10}}>
                                                                      <Text variant="titleMedium">Hotel Description</Text>
                                                                      <Text variant="bodyMedium">218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                                                        </Card.Content>
                                          </Card.Content>

                                          <Card.Content style={{flexDirection:'row',paddingTop:10}}>
                                                        <MyIcon title="wifi" name="wifi" size={30} color="#4BA7D9" />
                                                        <MyIcon title="coffee" name="coffee" size={30} color="#4BA7D9" />
                                                        <MyIcon title="bath" name="bath" size={30} color="#4BA7D9" />
                                                        <MyIcon title="car" name="car" size={30} color="#4BA7D9" />
                                                        <MyIcon title="paw" name="paw" size={30} color="#4BA7D9" />
                                          </Card.Content>

                                          <Card.Content style={{padding:10}}>
                                                        <Card.Content style={{borderTopWidth:1,borderTopColor:'lightgray',paddingLeft:5}}>
                                                        <Card.Content style={{flexDirection:'column',paddingTop:10}}>
                                                                      <Text variant="titleMedium">Location</Text>
                                                                      <Text variant="bodyMedium">218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
                                                        </Card.Content>

                                                        <Card.Actions>
                                                                      <Card.Cover source={require('/Users/kulisara/AwesomeProject/assets/week3/map.jpgi')} /> 
                                                        </Card.Actions>

                                                        </Card.Content>
                                          </Card.Content>
                                          
                            </View>

              );

}