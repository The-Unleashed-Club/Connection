import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';
import Picker from './picker';

const HandyWork_Screen = props => {
  const navigation = useNavigation();

    return(
      <View style={{ ...styles.screen, ...props.style}}>
      <View style={styles.top} >
      
        <TouchableOpacity  onPress={() => {navigation.goBack()}} >
          <Text style={styles.back}>
            {/* Icons */}
            <Feather name="chevron-left" size={15} color= {Colors.primary3} />
                Back
            </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>HandyWork</Text>
      </View>
      <View style={styles.container2}>
        <Image 
          source={require('../h2h/s7.png')}
          resizeMode= 'contain'
          style={{
            width: '60%',
            height: '95%',
            alignSelf: 'center',     
          }}
         />
      </View>
      <View style={styles.container3} >
        <Text style={styles.head2}>
          {''}
           Lawn too tall? Garder Filled with weeds?  Drain plugged? someone near by has a hand to offer.
        </Text> 
      </View>
      <View style={styles.container4}>
       <Text style={styles.head3}>Select type of Handywork</Text> 
      </View>

      <View style={styles.container5}>
        <Picker />
      </View>

      <View style={styles.container6}>
       <Dark_Button onPress={() => props.navigation.navigate('handyWorkScreen2')} >
         <Text style={{fontWeight: 'bold'}}>
          Request For HandyWork
         </Text>
       </Dark_Button>
      </View>
     
        
    </View>
    );
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "1.8%",
      marginTop: '7%'
  },
    top: {
      flex:0.85,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      // backgroundColor: "#A596D3",
    },
    container1: {
      flex: 0.55,
      width: '100%',
      alignSelf: 'flex-start',
      //  backgroundColor: '#fcba03',
    },
   
    container2: {
      flex: 2,
      flexDirection: 'column',
      justifyContent:'center',
      width: '100%',
      // backgroundColor: '#59e6f0'
      
    },
    container3: { 
      flex: 1.2,
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      paddingHorizontal: '2%',
      // backgroundColor: '#b5ad98',
    
     
     
    },
    container4: { 
      flex: 0.5,
      width: '100%',
      flexDirection: 'column',
      justifyContent :'flex-end',
      // paddingTop: '2%',
      // backgroundColor: '#8af249',
    },
    container5: { 
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      // backgroundColor: '#1630B0',
      width: '100%',
    },
    container6: { 
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100%',
      // backgroundColor: '#218291',
    },
    back:{
      alignSelf: "flex-start",
      fontSize: 16,
      color: Colors.primary3,
    },
    head: {
        color: Colors.primary1,
        fontSize: 26,
        fontWeight: "bold"
      },
    head2: {
      alignSelf: 'flex-start',
      fontSize: 20,
      color: Colors.primary2,
  
    },
    head3: {
      fontSize: 17.5,
      alignSelf: 'center',
      fontWeight: 'bold',
    }

   
});

export default HandyWork_Screen;