import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Resort from './screens/week3/Resort';
import Health from './screens/week5/Health';
import Bmi from './components/week5/Bmi';
import Heartbeat from './components/week5/Heartbeat';
import ChartKitScreen from './screens/week5/ChartKitScreen';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootTab';




export default function App() {
  return (
    <NavigationContainer>
    <RootStack />
    </NavigationContainer>

  
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';

// import { PaperProvider } from 'react-native-paper';
// import TestPaper from './screens/week4/TestPaper';
// import PaperQuiz from './screens/week4/PaperQuiz';

// export default function App() {
//   return (
//     // <Welcome />
//     // <Travel />
//     <PaperProvider>
//       <PaperQuiz />
//     </PaperProvider>

//   );
// }


