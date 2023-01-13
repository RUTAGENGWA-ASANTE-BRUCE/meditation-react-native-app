import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg, Line, Circle } from 'react-native-svg';
import tw from 'twrnc'
import { DoubleDot, UpDown } from '../utils/Icons';
const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hourRotation = (time.getHours() / 12) * 360;
    const minuteRotation = (time.getMinutes() / 60) * 360;

    return (
        <View style={styles.container}>
            <Svg width="354" height="354" viewBox="0 0 354 354" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="176.777" cy="177" r="122" fill="#DEE4BB" stroke="#323E45" strokeWidth="6" />
                <Line x1="179.777" y1="52" x2="179.777" y2="81" stroke="#323E45" strokeWidth="6" />
                <Line x1="179.777" y1="273" x2="179.777" y2="302" stroke="#323E45" strokeWidth="6" />
                <Line x1="301.777" y1="180" x2="272.777" y2="180" stroke="#323E45" strokeWidth="6" />
                <Line x1="80.7767" y1="180" x2="51.7767" y2="180" stroke="#323E45" strokeWidth="6" />
                <Line x1="267.286" y1="90.5097" x2="246.78" y2="111.016" stroke="#323E45" strokeWidth="6" />
                <Line x1="111.016" y1="246.78" x2="90.5096" y2="267.286" stroke="#323E45" strokeWidth="6" />
                <Line x1="263.044" y1="267.286" x2="242.536" y2="246.78" stroke="#323E45" strokeWidth="6" />
                <Line x1="106.773" y1="111.016" x2="86.267" y2="90.5096" stroke="#323E45" strokeWidth="6" />
                <Line x1="178.277" y1="177" x2="178.277" y2="107"
                    stroke="#323E45" strokeWidth="3"
                    transform={`rotate(${minuteRotation},178.277,177)`}
                />
                <Line x1="178.663" y1="176.425"

                    x2="206.141" y2="145.995"
                    stroke="#323E45" strokeWidth="3"
                    transform={`rotate(${hourRotation}, 178.663, 176.425)`}
                />
                <Circle cx="179.777" cy="177" r="6" fill="#323E45" />
            </Svg>
            <View style={tw`absolute top-80  `}>
                <View style={tw`flex flex-row`}>
                    <View style={tw`w-[40px] h-[30px] bg-white flex flex-row justify-center items-center  `}>
                        <Text style={tw`text-black`}>{time.getHours()}</Text>
                        <View style={tw`ml-2 mt-1`}>
                            <UpDown />
                        </View>
                    </View>
                    <View style={tw`ml-2 mt-2.5`}>

                        <DoubleDot />
                    </View>
                    <View style={tw`w-[40px] h-[30px] ml-2 bg-white flex flex-row justify-center items-center  `}>
                        <Text style={tw`text-black`}>{time.getMinutes()}</Text>
                        <View style={tw`ml-2 mt-1`}>
                            <UpDown />
                        </View>
                    </View>
                    <View style={tw`w-[40px] ml-2 h-[30px] bg-white flex flex-row justify-center items-center  `}>
                        <Text style={tw`text-black`}>PM</Text>
                        <View style={tw`ml-2 mt-1`}>
                            <UpDown />
                        </View>
                    </View> 
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default Clock;