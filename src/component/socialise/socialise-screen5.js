import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    SafeAreaView
}
    from 'react-native';
import Top_container from './socialise-head';
import Dark_Button from '../../Items/Buttons/dark-bt';


const Social_Screen5 = (props) => {
    const [value, onChangeText] = useState();

    console.log(props);

    return (
        <SafeAreaView style={{ ...styles.screen, ...props.style }}>
            <View style={styles.top_box}>
                <Top_container
                    title="Socialise"
                    sub_head="Coffee meetup"
                    detail_3="Additional Details"
                />
            </View>
            <View style={styles.mid_box}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    placeholder={'Enter Text'}
                />
            </View>
            <View style={styles.bottom_box}>
                <Dark_Button onPress={() => props.navigation.navigate('socialscreen6', {
                    ...props.route.params,
                    note: value
                })} >
                    <Text style={{ fontSize: 18 }}> Next</Text>
                </Dark_Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.8%",
        backgroundColor: '#ffffff',
        paddingTop: '7%'
    },
    top_box: {
        flex: 4,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(25,5,120)',
    },
    mid_box: {
        flex: 3.4,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: "center",
        paddingTop: '20%',
        paddingHorizontal: '1%',
        // backgroundColor: "#86EC4F",
    },
    bottom_box: {
        flex: 1.2,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: "2%",
        paddingLeft: '55%',
        // backgroundColor: "#9811C9",
    },
});

export default Social_Screen5;