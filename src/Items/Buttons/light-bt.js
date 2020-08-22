import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


const Button2 = props => {
    return (
      <TouchableOpacity activeOpacity={0.72} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  
const styles = StyleSheet.create({
    button: {
      borderWidth: 2.5,
      borderColor: '#2D375B',
      paddingVertical: 10,
      paddingHorizontal: 100,
      borderRadius: 25,
      alignItems: 'center',
    },
    buttonText: {
      color: '#2D375B',
      fontSize: 15,
      
    }
  });

  export default Button2;