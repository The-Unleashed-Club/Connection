import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SmoothPicker from 'react-native-smooth-picker';

const dataCity = [

  // data need to change afterwards

  'Paris',
  'Berlin',
  'Lisbonne',
  'Budapest',
  'Londres',
  'Prague',
  'Rome',
  'Barcelone',
  'Amsterdam',
  'Dublin',
  'Vienne',
  'Madrid',
  'Cracovie',
  'Reykjavik',       
  'Istambul',
  'Florence',
  'Copenhague',
  'Zagreb',
  'Stockholm',
  'Thessalonique',
  'Marseille',
  'Porto',
  'Lugano',
  'Bruxelles',
  'Lyon',
  
];

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 22,
  1: 15,
  2: 7,
};

const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
  return (
    <View
      style={[styles.OptionWrapper, { opacity, borderColor: selected ? '#64666D' : 'transparent', width: vertical ? 220 : 'auto'}]}
    >
    <Text style={{fontSize}}>
      {name}
    </Text>
  </View>
  );
});




const ItemToRender = ({item, index}, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 4) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return <Item opacity={opacity} selected={selected} vertical={vertical} fontSize={fontSize} name={item}/>;
};

const Picker = (props) => {

  function handleChange(index) {
    setSelected(index);
    refPicker.current.scrollToIndex({
      animated: false,
      index: index,
      viewOffset: -50,
    });
  }

  const [ selected, setSelected ] = useState(1);
  const refPicker = useRef(null);
  return (
    <View style={{ ...styles.container, ...props.style}}>{props.selected}
      
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          refFlatList={refPicker}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          data={dataCity}
          scrollAnimatio={false}
          onSelected={({ item, index }) => handleChange(index)}
          selectOnPress={true}
          renderItem={option => ItemToRender(option, selected, true)}
          magnet={true}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  wrapperVertical: {
    flex: 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
    // backgroundColor: '#218291',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    height: 55,
    borderWidth: 3,
    borderRadius: 20,
    // backgroundColor: '#218291',
  },
});

export default Picker;