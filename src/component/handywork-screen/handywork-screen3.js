import React , { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TimePicker from '../timePicker/timePicker';
import Top_container from './handy_head';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';


const HandyWork_Screen3 = props => {
  console.log(props);


  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Meridian, setMeridian] = useState(0);

  const hourHandler = (Hour) => {
    setHour(Hour);
    console.log(Hour);
  };
  const minHandler = (Min) => {
    setMinute(Min);
    console.log(Min);
  };
  const AmPmHandler = (AmPm) => {
    setMeridian(AmPm);
    console.log(AmPm);
  };

    return(
      <View style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top_box} >
        <Top_container
            title="Handy Work"
            sub_head="Handyman Services"
            detail_1="Friday, june 5, 2020"
            detail_3="What time do you request?"
         />
      </View>

      <View style={styles.mid_box}>
        <TimePicker
            getMin={minHandler}
            getHour={hourHandler}
            getMeridian={AmPmHandler}
          />
      </View>
      <View style={styles.bottom_box}>
        <Dark_Button onPress={() => props.navigation.navigate('handyWorkScreen4', {
           ...props.route.params,
           time: { Hour, Minute, Meridian },
        })} >
          <Text style={{fontSize: 18}}> Next</Text>
        </Dark_Button>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "1.8%",
    paddingTop: '7%'

  },
  top_box:{
    flex: 4,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'rgb(25,5,120)',
  },
  mid_box: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  bottom_box: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: '60%',
    // backgroundColor: "#9811C9",
  },
  back:{
    alignSelf: "flex-start",
    fontSize: 16,
    // color: Colors.primary2,
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    // color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 19,
    // color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: 'flex-start',
    fontWeight: "bold",
  },
});

export default HandyWork_Screen3;