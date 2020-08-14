import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';

const SignIn = props => {
  return(
      <View style={styles.Signin}>
        <Text style={{paddingBottom: '20%'}}>
          Let’s get you started!
        </Text>
        <View style={{padding:20}}>
          <Text style={styles.lable}>
            First Name
            </Text>
              <TextInput
              style={{padding: 5}}
              placeholder="Type here to translate!" 
            />      
          <Text style={styles.lable}>
            Last Name
          </Text>
              <TextInput
              
              placeholder="Type here to translate!" 
              />
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  Signin: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  lable: {
    position:'relative',
    padding: '5%',
  }
});

export default SignIn;