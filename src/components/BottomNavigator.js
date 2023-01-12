import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Dimensions } from 'react-native';
import { Chat, Documents, Home, Profile, Settings } from '../utils/Icons';

const BottomNavigator = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('screen').width);
    return (
        <View style={tw`w-[${screenWidth}] absolute bottom-0  mx-20`}>

            <View style={tw`bg-[#323E45] bottom-0 opacity-50  w-[310px] h-[45px] rounded-lg`}>

            </View>
            <View style={tw`bottom-9 flex flex-row  w-[290px] ml-3 h-[45px] rounded-lg justify-between `}>
                <TouchableOpacity>
                    <Home />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Profile />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Documents />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Settings />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Chat />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default BottomNavigator;
