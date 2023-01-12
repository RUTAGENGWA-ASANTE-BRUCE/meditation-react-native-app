import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc'
import { Svg, Path, Circle, Rect } from 'react-native-svg'
import { ArrowRight, Heart, PlayVideoAudio, QuestionMarkCircled, ThumbsUp } from '../utils/Icons';
import { Dimensions } from 'react-native';
import Slider from '../components/Slider';
import BottomNavigator from '../components/BottomNavigator';

const RelaxationScreen = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('screen').width);
    return (
        <View style={tw`bg-[#323E45] h-full  flex`}>
            <View style={tw`absolute top-0 left-0`}>
                <Svg width="391" height="133" viewBox="0 0 391 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M-144.209 91.2661C-162.696 72.2648 -176.743 48.5061 -185.505 24.0739C-197.821 -10.3548 -201.859 -47.1545 -203.945 -83.6736C-210.772 -201.647 -166.94 -334.862 -38.9083 -363.969C46.9924 -383.47 137.307 -353.624 212.69 -313.495C323.451 -254.533 474.581 -81.7094 333.915 32.7895C258.287 94.335 143.398 63.1632 56.3101 94.1232C15.5299 108.635 -23.7235 137.344 -68.9859 131.18C-98.5196 127.129 -123.991 112.054 -144.209 91.2661V91.2661Z" fill="#B1BF80" />
                </Svg>
            </View>
            <View style={tw`absolute right-10  top-3 `}>
                <QuestionMarkCircled />
            </View>
            <View style={tw`absolute top-2 left-5`}>
                <Svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="29.5" cy="29.5" r="29" stroke="#323E45" />
                </Svg>
            </View>
            <View style={tw`mt-75 justify-center items-center`}>
                <View>

                    <Text style={tw`text-white text-lg`}>Relaxation</Text>
                    <View style={tw`w-[327px] mt-2 h-[48px] bg-[#6BB1C8] rounded-md pl-3 pt-1.5`}>
                        <PlayVideoAudio />
                    </View>
                </View>
            </View>
            <View style={tw`absolute top-20 left-40`}>
                <Svg width="321" height="638" viewBox="0 0 321 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle r="2.5" transform="matrix(-1 0 0 1 15.5 2.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 318.5 2.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 297.5 413.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 2.5 505.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 141.5 65.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 71.5 635.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 7.5 140.5)" fill="#EFEAD4" />
                    <Circle r="2.5" transform="matrix(-1 0 0 1 130.5 408.5)" fill="#EFEAD4" />
                </Svg>
            </View>
            <View style={tw`absolute right-20 top-40`}>
                <Svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="61" cy="61" r="61" fill="#F7CC14" />
                </Svg>
            </View>
            <View style={tw`absolute right-8 top-50`}>
                <Svg width="101" height="66" viewBox="0 0 101 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M40.6603 16.1045C42.5248 6.91603 50.6482 0 60.387 0C71.5039 0 80.516 9.01207 80.516 20.129C91.6329 20.129 100.645 29.1411 100.645 40.2581C100.645 51.375 91.6329 60.3871 80.516 60.3871C75.5862 60.3871 71.0703 58.6149 67.5707 55.6729C64.0473 61.5136 57.641 65.4194 50.3224 65.4194C42.7824 65.4194 36.2106 61.2736 32.7622 55.1372C31.9274 55.2803 31.0691 55.3548 30.1934 55.3548C27.4436 55.3548 24.8656 54.6197 22.645 53.3352C20.4245 54.6197 17.8464 55.3548 15.0966 55.3548C6.75891 55.3548 -0.000144958 48.5958 -0.000144958 40.2581C-0.000144958 31.9203 6.75891 25.1613 15.0966 25.1613C17.0605 25.1613 18.9367 25.5363 20.6577 26.2185C22.4024 19.8093 28.2637 15.0968 35.2257 15.0968C37.1415 15.0968 38.974 15.4536 40.6603 16.1045Z" fill="#749EA5" />
                </Svg>

            </View>
            <View style={tw`absolute right-8 bottom-50`}>
                <Svg width="101" height="66" viewBox="0 0 101 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M40.6603 16.1045C42.5248 6.91603 50.6482 0 60.387 0C71.5039 0 80.516 9.01207 80.516 20.129C91.6329 20.129 100.645 29.1411 100.645 40.2581C100.645 51.375 91.6329 60.3871 80.516 60.3871C75.5862 60.3871 71.0703 58.6149 67.5707 55.6729C64.0473 61.5136 57.641 65.4194 50.3224 65.4194C42.7824 65.4194 36.2106 61.2736 32.7622 55.1372C31.9274 55.2803 31.0691 55.3548 30.1934 55.3548C27.4436 55.3548 24.8656 54.6197 22.645 53.3352C20.4245 54.6197 17.8464 55.3548 15.0966 55.3548C6.75891 55.3548 -0.000144958 48.5958 -0.000144958 40.2581C-0.000144958 31.9203 6.75891 25.1613 15.0966 25.1613C17.0605 25.1613 18.9367 25.5363 20.6577 26.2185C22.4024 19.8093 28.2637 15.0968 35.2257 15.0968C37.1415 15.0968 38.974 15.4536 40.6603 16.1045Z" fill="#749EA5" />
                </Svg>

            </View>
            <View style={tw`absolute left-20 bottom-80`}>
                <Svg width="101" height="66" viewBox="0 0 101 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M59.9847 16.1045C58.1202 6.91603 49.9968 0 40.2581 0C29.1411 0 20.129 9.01207 20.129 20.129C9.01207 20.129 0 29.1411 0 40.2581C0 51.375 9.01207 60.3871 20.129 60.3871C25.0588 60.3871 29.5747 58.6149 33.0743 55.6729C36.5977 61.5136 43.004 65.4194 50.3226 65.4194C57.8627 65.4194 64.4344 61.2736 67.8828 55.1372C68.7177 55.2803 69.5759 55.3548 70.4516 55.3548C73.2014 55.3548 75.7795 54.6197 78 53.3352C80.2205 54.6197 82.7986 55.3548 85.5484 55.3548C93.8861 55.3548 100.645 48.5958 100.645 40.2581C100.645 31.9203 93.8861 25.1613 85.5484 25.1613C83.5846 25.1613 81.7083 25.5363 79.9873 26.2185C78.2426 19.8093 72.3813 15.0968 65.4193 15.0968C63.5035 15.0968 61.671 15.4536 59.9847 16.1045Z" fill="#749EA5" />
                </Svg>
            </View>
            <View style={tw`absolute bottom-0`}>
                <Svg style={[styles.svg, { transform: [{ scaleX: (Dimensions.get('screen').width / 430) + 0.2 }] }]} width="430" height="173" viewBox="0 0 430 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M-84.3329 90.831C-94.1427 146.108 -83.0907 204.693 -55.7166 254.071C36.0711 419.609 270.187 351.511 324.077 191.76C333.396 164.119 336.874 131.407 319.939 107.653C300.924 80.9851 263.719 75.4691 231.01 76.9629C198.302 78.4567 164.188 84.4011 133.784 72.238C82.8962 51.8366 60.1078 -6.43943 -2.77982 1.09827C-52.5681 7.0995 -76.2718 45.2644 -84.3329 90.831Z" fill="#B1BF80" />
                    <Path d="M148.265 137.391C174.428 86.9711 219.377 46.7418 271.761 23.9544C447.389 -52.4265 593.417 146.411 538.31 307.854C528.771 335.784 511.419 364.189 483.196 372.832C451.508 382.533 418.241 364.051 392.9 342.71C367.56 321.369 343.832 295.59 311.932 286.633C258.514 271.676 204.332 304.43 158.484 259.653C122.207 224.176 126.678 178.939 148.265 137.391Z" fill="#5A786F" />
                </Svg>
            </View>
            <BottomNavigator />

        </View>
    );
}

const styles = StyleSheet.create({})

export default RelaxationScreen;
