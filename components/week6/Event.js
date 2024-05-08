import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";


export default function Event(props) {
   const [ComingEvent, setComingEvent] = useState([]);

   const loadComingEvent = async () => {
      try {
         let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
         let data = await promise.json();
         console.log("Load Data 1 : ", data);
         //SET STATE
         setComingEvent(data);
      } catch (error) {
         console.log("ERROR 1 : ", error);
      }
   }
   useEffect(() => {
      loadComingEvent();
   }, []);

   return (
      <View style={props.style}>
         <Text style={{ fontsize: 20 }}>Up Coming Event</Text>
         <Text style={{ color: 'grey', marginVertical: 20 }}>What's the Worst That Could Happend</Text>

         <FlatList
            horizontal={true}

            data={ComingEvent}
            renderItem={
               ({ item, index }) => {
                  console.log(item, index, item.uri);
                  return (
                     <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 300, height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                        <View style={{ flexDirection: 'row', height: 75, width: 300, paddingHorizontal: 10, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1 }}>
                           <View style={{ flexDirection: "column",padding:10 }}>
                              <Text style={{ fontsize: 30, color: 'red' ,fontSize:17}}>{item.month}</Text>
                              <Text style={{ fontsize: 30, color: 'gray' ,fontSize:12,marginLeft:10}}>{item.date}</Text>
                           

                           </View>

                           <View style={{ flexDirection: "column",padding:10 }}>
                              <Text style={{ fontsize: 30, color: 'black' ,fontSize:17}}>{item.title}</Text>
                              <Text style={{ fontsize: 30, color: 'gray' ,fontSize:12}}>{item.datetime}</Text>
                              <Text style={{ fontsize: 30, color: 'gray' ,fontSize:12}}>{item.place}</Text>
                           </View>


                        </View>

                     </View>
                  );
               }
            }
            keyExtractor={item => item.id}
         />
      </View>
   );
}
