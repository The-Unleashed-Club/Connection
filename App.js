import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Inter_900Black, } from '@expo-google-fonts/inter';

import HomeScreen from './src/navigation/HomeScreen';






export default function App() {


  let [fontsLoaded] = useFonts({
    Inter_900Black,
    
    
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }


  // test1
  // test
  // return <Socio/>
  return <HomeScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
