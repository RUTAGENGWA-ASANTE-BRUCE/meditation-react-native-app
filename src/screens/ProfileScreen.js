import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc'
import { Svg, Path, Circle, Rect } from 'react-native-svg'
import { ArrowRight, AvatarCircled, GoldStar, Heart, Lock, PlayVideoAudio, QuestionMarkCircled, ThumbsUp } from '../utils/Icons';
import { Dimensions } from 'react-native';
import Slider from '../components/Slider';
import BottomNavigator from '../components/BottomNavigator';
import { TextInput } from 'react-native-gesture-handler';

const ProfileScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const daysAndStatus = [
        {
            day: "M",
            status: "done"
        },
        {
            day: "T",
            status: "done"
        },
        {
            day: "W",
            status: "done"
        },
        {
            day: "T",
            status: "not yet"
        },
        {
            day: "F",
            status: "not yet"
        },
        {
            day: "S",
            status: "not yet"
        },
        {
            day: "S",
            status: "not yet"
        },
    ]
    return (
        <View style={tw`bg-[#EFEAD4] h-full  flex`}>
            <View style={tw`absolute top-0 right-0`}>
                <Svg width="387" height="133" viewBox="0 0 387 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M535.273 91.2661C553.76 72.2648 567.807 48.5061 576.569 24.0739C588.885 -10.3548 592.924 -47.1545 595.009 -83.6736C601.836 -201.647 558.004 -334.862 429.972 -363.969C344.072 -383.47 253.758 -353.624 178.374 -313.495C67.6128 -254.533 -83.5172 -81.7094 57.1488 32.7895C132.777 94.335 247.667 63.1632 334.754 94.1232C375.534 108.635 414.788 137.344 460.05 131.18C489.584 127.129 515.055 112.054 535.273 91.2661V91.2661Z" fill="#B1BF80" />
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
            <View style={tw`mt-25 flex justify-center items-center`}>
                <View style={tw`rounded-full items-center justify-center pt-8 overflow-hidden h-[114px] w-[114px] bg-[#3B4E51] border-2 border-[#8CA78E]`}>
                    <AvatarCircled />
                </View>
                <View style={tw`mt-3`}>
                    <TextInput
                        style={tw`border-b-[0.5px] border-[#323E45] pb-2 outline-none w-[300px] font-bold placeholder-[#D0CDBD]`}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        placeholder="first name"
                    />
                    <TextInput
                        style={tw`mt-[36px] border-b-[0.5px] border-[#323E45] pb-2 outline-none w-[300px] font-bold placeholder-[#D0CDBD]`}
                        onChangeText={(text) => setLastName(text)}
                        value={firstName}
                        placeholder="last name"
                    />
                    <TextInput
                        style={tw`mt-[36px] border-b-[0.5px] border-[#323E45] pb-2 outline-none w-[300px] font-bold placeholder-[#D0CDBD]`}
                        onChangeText={(text) => setPhone(text)}
                        value={firstName}
                        placeholder="phone"
                    />
                </View>

                <View style={tw`border-b-[0.5px] border-[#323E45] w-[300px] mt-10 pb-5`}>
                    <Text style={tw`text-black font-semibold`}>Weekly Progress</Text>
                    <View style={tw`flex flex-row justify-between w-full mt-5`}>
                        {daysAndStatus.map((day, i) => (
                            <View style={tw`flex flex-col`}>
                                <Text style={tw`text-black font-semibold`}>{day.day}</Text>
                                <View style={tw`mt-3`}>
                                    {day.status == "done" ? <GoldStar /> : <Lock />}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <View style={tw`absolute -bottom-2`}>
                <Svg style={[styles.svg, { transform: [{ scaleX: (Dimensions.get('screen').width / 430) + 0.2 }] }]} width="430" height="248" viewBox="0 0 430 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M319.534 451.487C355.002 466.995 387.738 494.732 426.418 493.295C492.611 490.842 537.792 404.371 603.344 413.752C644.469 419.634 674.814 462.971 716.352 462.461C744.817 462.101 769 440.32 782.935 415.507C789.576 403.669 794.654 390.252 793.078 376.775C791.033 359.126 777.974 344.576 763.296 334.56C728.989 311.157 685.709 306.865 644.883 299.364C604.041 291.845 560.461 278.052 537.32 243.584C507.641 199.416 522.576 139.27 506.468 88.5479C493.893 48.9379 460.879 16.2301 420.9 4.83433C380.92 -6.5614 335.21 4.0833 304.963 32.5889C257.713 77.1086 245.159 160.74 182.808 178.806C138.672 191.588 94.0998 162.737 48.569 156.546C8.98085 151.16 -33.8018 164.882 -59.5606 195.425C-85.3374 225.983 -90.9954 273.326 -69.4552 307.006C-35.6112 359.999 48.8208 366.898 74.2202 424.421C85.0584 448.988 85.6121 485.308 120.035 486.497C142.861 487.281 149.66 468.83 166.627 457.934C210.047 430.011 273.51 431.321 319.552 451.471L319.534 451.487Z" fill="#69594E" />
                    <Path d="M16.0159 190.934C-18.3212 213.969 -56.9685 258.482 -72 277.859L291.473 311C351.237 299.953 467.396 272.97 453.922 253.412C437.079 228.964 332.221 207.775 312.662 207.775C293.103 207.775 259.418 166.486 238.229 166.486C217.04 166.486 201.827 127.369 156.189 144.211C110.551 161.053 148.583 162.139 114.898 166.486C81.2128 170.832 58.9372 162.139 16.0159 190.934Z" fill="#A3846B" />
                </Svg>
            </View>
            <BottomNavigator />

        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreen;
