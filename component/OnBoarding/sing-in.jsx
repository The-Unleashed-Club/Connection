import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const SignIn = props => {
  return(
      <View style={styles.Signin}>
        <Text>
          Let’s get you started!
        </Text>
      </View>
  )
};

const styles = StyleSheet.create({
  Signin: {
    flex: 1,
    justifyContent: 'space-evenly',

  }
});

export default SignIn;