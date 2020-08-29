import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Loadscreen from '../component/home/Load'; 
import Volunteer  from '../component/Volunteer'; 
import Victim  from '../component/Help-need';

import Social_Screen from '../component/socialise/socialise-screen';
import Social_Screen2 from '../component/socialise/socialise-screen2';

import Pet_Screen from '../component/pet-care/pet';
import Pet_screen2 from "../component/pet-care/petCare2";

import HandyWork_Screen from '../component/handywork-screen/handywork-screen';
import HandyWork_Screen2 from '../component/handywork-screen/handywork-screen2';
import HandyWork_Screen3 from '../component/handywork-screen/handywork-screen3';
import HandyWork_Screen4 from '../component/handywork-screen/handywork-screen4';
import HandyWork_Screen5 from '../component/handywork-screen/handywork-screen5';

import Transport_screen from '../component/transportation/transportation';
import Transport_screen2 from '../component/transportation/transportation2';

import Chat_Screen from '../servises/chat/chat';
import Browsing_Screen from '../servises/browsing-requests/browsing-screen';
import ProfileScreen from '../component/profile/profile';

const ScreenConstant = createStackNavigator();





function SocialScreen() {
  return(
    <ScreenConstant.Navigator screenOptions={{headerShown: false}} >
      <ScreenConstant.Screen name="socialscreen1" component={Social_Screen} />
      <ScreenConstant.Screen name="socialscreen2" component={Social_Screen2} />
    </ScreenConstant.Navigator>
  );
};

function Petscreen() {
  return(
    <ScreenConstant.Navigator screenOptions={{headerShown: false}} >
      <ScreenConstant.Screen name="PetScreen1" component={Pet_Screen} />
      <ScreenConstant.Screen name="PetScreen2" component={Pet_screen2} />
    </ScreenConstant.Navigator>
  );
};

function HandyWorkScreen() {
  return(
    <ScreenConstant.Navigator screenOptions={{headerShown: false}} >
      <ScreenConstant.Screen name="handyWorkScreen1" component={HandyWork_Screen} />
      <ScreenConstant.Screen name="handyWorkScreen2" component={HandyWork_Screen2} />
      <ScreenConstant.Screen name="handyWorkScreen3" component={HandyWork_Screen3} />
      <ScreenConstant.Screen name="handyWorkScreen4" component={HandyWork_Screen4} />
      <ScreenConstant.Screen name="handyWorkScreen5" component={HandyWork_Screen5} />
    </ScreenConstant.Navigator>
  );
};

function TransportScreen() {
  return(
    <ScreenConstant.Navigator screenOptions={{headerShown: false}}  >
      <ScreenConstant.Screen name="transport_screen1" component={Transport_screen} />
      <ScreenConstant.Screen name="transport_screen2" component={Transport_screen2} />
    </ScreenConstant.Navigator>
  );
};



function HomeScreen() {
  return (
    <NavigationContainer>
      <ScreenConstant.Navigator screenOptions={{headerShown: false}} >
        <ScreenConstant.Screen name="Home" component={Loadscreen} />
        <ScreenConstant.Screen name="vol" component={Volunteer} />
        <ScreenConstant.Screen name="Victim" component={Victim} />
        <ScreenConstant.Screen name="social_screen" component={SocialScreen} />
        <ScreenConstant.Screen name="pet_screen" component={Petscreen} />
        <ScreenConstant.Screen name="handywork_screen" component={HandyWorkScreen} />
        <ScreenConstant.Screen name="transport_screen" component={TransportScreen} />
        <ScreenConstant.Screen name="chat" component={Chat_Screen} />
        <ScreenConstant.Screen name="browse" component={Browsing_Screen} />
        <ScreenConstant.Screen name="profile" component={ProfileScreen} />
        
      </ScreenConstant.Navigator>
     
    </NavigationContainer>
  );
}

export default HomeScreen;























