/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Components/screens/home';
import Productinfo from './Components/screens/productinfo';
import Mycart from './Components/screens/mycart';


const App=() => {

  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      > 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="My cart" component={Mycart} />
        <Stack.Screen name="Product info" component={Productinfo} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};



export default App;
