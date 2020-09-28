import React, { useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from '../../Items/Colors';

import Hour from "./hourPicker";
import Meridian from "./meridianPicker";
import Minute from "./minutePicker";

const TimePicker = (props) => {
  // console.log(props);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
            // backgroundColor: "red",
          //   width: "100%",
          height: 250,
        }}
      >
        <Text style={styles.head2}>Hour</Text>
        <Hour getHour={props.getHour} />
      </View>
      <View
        style={{
          flex: 1,
            // backgroundColor: "blue",
          //   width: "100%",
          height: 250,
        }}
      >
        <Text style={styles.head2}>Minutes</Text>
        <Minute getMin={props.getMin} />
      </View>
      <View
        style={{
          flex: 1,
            // backgroundColor: "green",
            // width: "100%",
          height: 250,
        }}
      >
        <Text style={styles.head2}>Meridian</Text>
        <Meridian getMeridian={props.getMeridian} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  head2: {
    alignSelf: 'center',
    fontSize: 19,
    marginBottom: '5%',
    color: Colors.secondary1,
    
  },
});

export default TimePicker;
