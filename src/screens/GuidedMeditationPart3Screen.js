import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Svg, Path, Circle, Rect } from 'react-native-svg'
import { PlayVideoAudio, QuestionMarkCircled } from '../utils/Icons';
import { Dimensions } from 'react-native';
import Slider from '../components/Slider';
import BottomNavigator from '../components/BottomNavigator';

const GuidedMeditationPart3Screen = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('screen').width);
    return (
        <View style={tw`bg-[#EFEAD4] h-full  flex`}>

            <View style={tw`absolute right-10  top-3 `}>
                <Svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="14.5" cy="14.5" r="14" stroke="#D3DAB4" />
                    <Path d="M13.0859 17.7045V17.6151C13.0958 16.6655 13.1953 15.9098 13.3842 15.348C13.5731 14.7862 13.8416 14.3313 14.1896 13.9833C14.5376 13.6353 14.9552 13.3146 15.4424 13.0213C15.7358 12.8423 15.9992 12.631 16.2329 12.3874C16.4666 12.1388 16.6505 11.853 16.7848 11.5298C16.924 11.2067 16.9936 10.8487 16.9936 10.456C16.9936 9.96875 16.8792 9.54616 16.6505 9.18821C16.4218 8.83026 16.1161 8.55433 15.7333 8.36044C15.3505 8.16655 14.9254 8.0696 14.4581 8.0696C14.0504 8.0696 13.6576 8.15412 13.2798 8.32315C12.9019 8.49219 12.5862 8.75817 12.3327 9.12109C12.0791 9.48402 11.9325 9.95881 11.8927 10.5455H10.0134C10.0532 9.70028 10.272 8.97692 10.6697 8.37535C11.0724 7.77379 11.6019 7.31392 12.2581 6.99574C12.9193 6.67756 13.6527 6.51847 14.4581 6.51847C15.3331 6.51847 16.0937 6.69247 16.74 7.04048C17.3913 7.38849 17.8934 7.86577 18.2464 8.4723C18.6044 9.07883 18.7833 9.76989 18.7833 10.5455C18.7833 11.0923 18.6988 11.587 18.5298 12.0295C18.3657 12.4719 18.1271 12.8672 17.8139 13.2152C17.5056 13.5632 17.1328 13.8714 16.6953 14.1399C16.2578 14.4134 15.9073 14.7017 15.6438 15.005C15.3803 15.3033 15.1889 15.6587 15.0696 16.0714C14.9502 16.484 14.8856 16.9986 14.8757 17.6151V17.7045H13.0859ZM14.0404 22.1193C13.6725 22.1193 13.3568 21.9876 13.0934 21.7241C12.8299 21.4606 12.6981 21.1449 12.6981 20.777C12.6981 20.4091 12.8299 20.0934 13.0934 19.8299C13.3568 19.5664 13.6725 19.4347 14.0404 19.4347C14.4083 19.4347 14.724 19.5664 14.9875 19.8299C15.251 20.0934 15.3828 20.4091 15.3828 20.777C15.3828 21.0206 15.3206 21.2443 15.1963 21.4482C15.077 21.652 14.9154 21.8161 14.7116 21.9403C14.5127 22.0597 14.289 22.1193 14.0404 22.1193Z" fill="#D3DAB4" />
                </Svg>

            </View>


            <View style={tw`absolute left-0 top-0`}>
                <Svg width="391" height="133" viewBox="0 0 391 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M-144.209 91.2661C-162.696 72.2648 -176.743 48.5061 -185.505 24.0739C-197.821 -10.3548 -201.859 -47.1545 -203.945 -83.6736C-210.772 -201.647 -166.94 -334.862 -38.9083 -363.969C46.9924 -383.47 137.306 -353.624 212.69 -313.495C323.451 -254.533 474.581 -81.7094 333.915 32.7895C258.287 94.335 143.398 63.1632 56.3101 94.1232C15.5299 108.635 -23.7235 137.344 -68.9859 131.18C-98.5196 127.129 -123.991 112.054 -144.209 91.2661Z" fill="#B1BF80" />
                </Svg>

            </View>



            <View style={tw`absolute top-2 left-5`}>
                <Svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="29.5" cy="29.5" r="29" stroke="#323E45" />
                </Svg>

            </View>
            <View style={tw`mt-75 justify-center items-center`}>
                <View>

                    <Text style={tw`text-white text-lg`}>Daily meditation</Text>
                    <View style={tw`w-[327px] mt-2 h-[48px] bg-[#6BB1C8] rounded-md pl-3 pt-1.5`}>
                        <PlayVideoAudio />
                    </View>
                </View>
            </View>

            <View style={tw`absolute bottom-15 left-25`}>
                <Svg width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="127" cy="127" r="127" fill="#E99028" />
                </Svg>
            </View>
            <View style={tw`absolute bottom-0`}>
                <Svg style={[styles.svg, { transform: [{ scaleX: (Dimensions.get('screen').width / 430) + 0.2 }] }]} width="430" height="370" viewBox="0 0 430 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M-238.681 693.505C-259.016 664.44 -272.466 630.045 -278.791 595.896C-287.665 547.781 -285.095 498.312 -280.008 449.634C-263.691 292.359 -177.195 125.835 -1.85282 114.887C115.784 107.579 228.653 166.39 319.595 235.577C453.216 337.233 615.702 597.935 405.336 718.947C292.238 783.99 147.197 718.15 25.5315 740.338C-31.4432 750.746 -89.4502 780.233 -147.905 762.372C-186.04 750.68 -216.443 725.301 -238.681 693.505Z" fill="#323E45" />
                        <Path d="M570.712 127.347C601.504 144.959 628.341 170.33 648.63 198.517C677.182 238.249 695.961 284.086 712.127 330.283C764.463 479.489 757.272 667 603.356 751.703C500.079 808.497 372.907 803.457 261.14 779.678C96.9211 744.739 -161.254 578.267 -22.6155 379.076C51.928 272.001 211.196 269.674 311.77 197.704C358.859 163.984 398.744 112.569 459.232 103.786C498.711 98.0924 537.035 108.076 570.712 127.347Z" fill="#B1BF80" />
                </Svg>


            </View>
            <View style={tw`absolute right-12 top-50`}>
                <Svg width="101" height="66" viewBox="0 0 101 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M40.6603 16.1045C42.5248 6.91603 50.6482 0 60.387 0C71.5039 0 80.516 9.01207 80.516 20.129C91.6329 20.129 100.645 29.1411 100.645 40.2581C100.645 51.375 91.6329 60.3871 80.516 60.3871C75.5862 60.3871 71.0703 58.6149 67.5707 55.6729C64.0473 61.5136 57.641 65.4194 50.3224 65.4194C42.7824 65.4194 36.2106 61.2736 32.7622 55.1372C31.9274 55.2803 31.0691 55.3548 30.1934 55.3548C27.4436 55.3548 24.8656 54.6197 22.645 53.3352C20.4245 54.6197 17.8464 55.3548 15.0966 55.3548C6.75891 55.3548 -0.000144958 48.5958 -0.000144958 40.2581C-0.000144958 31.9203 6.75891 25.1613 15.0966 25.1613C17.0605 25.1613 18.9367 25.5363 20.6577 26.2185C22.4024 19.8093 28.2637 15.0968 35.2257 15.0968C37.1415 15.0968 38.974 15.4536 40.6603 16.1045Z" fill="#749EA5" />
                </Svg>


            </View>
            <View style={tw`absolute top-20 right-12`}>
                <Svg width="44" height="82" viewBox="0 0 44 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M42.9202 74.195C42.6402 73.415 42.2802 72.675 41.6602 72.105C40.9902 71.495 40.2102 71.095 39.3202 70.985C39.2902 70.945 39.2602 70.915 39.2302 70.875C38.8602 70.505 38.4102 70.245 37.9102 70.105C37.3802 69.965 36.8502 69.965 36.3102 70.105C35.3002 70.385 34.4902 71.195 34.2102 72.205C33.8202 73.615 33.9802 75.215 34.6302 76.545C34.6702 76.815 34.7202 77.095 34.7802 77.355C35.0602 78.555 35.7802 79.815 36.7302 80.595C37.1302 80.925 37.5502 81.225 38.0502 81.365C38.7002 81.545 39.3902 81.475 40.0002 81.215C40.4902 81.005 40.8702 80.715 41.2002 80.295C41.2902 80.175 41.3602 80.055 41.4302 79.945C41.7502 79.795 42.0502 79.595 42.2602 79.375L42.7302 78.765C43.0002 78.295 43.1402 77.795 43.1402 77.255C43.1802 76.845 43.2102 76.445 43.1902 76.035C43.1602 75.435 43.1102 74.785 42.9002 74.215L42.9202 74.195Z" fill="#323E45" />
                    <Path d="M36.3161 36.0509C36.1761 33.3709 34.6861 30.8309 32.0461 29.9509C31.1561 29.6509 30.2661 29.6009 29.4061 29.7309C28.7161 29.4309 27.9961 29.1909 27.2561 29.0809C26.4661 28.9509 25.6461 28.9309 24.9461 29.3809C24.3061 29.7909 23.7361 30.4109 23.5661 31.1709C23.3161 32.3209 23.3261 33.4909 23.5661 34.6009C22.6661 36.8709 22.8561 39.4409 24.0161 41.6509C25.5161 44.4909 28.5261 46.3709 31.5461 47.2309C32.8161 47.5909 34.2761 46.9909 34.9361 45.8509C36.3061 43.4709 36.5661 40.7809 36.0261 38.2009C36.2461 37.5109 36.3661 36.7809 36.3261 36.0509H36.3161Z" fill="#323E45" />
                    <Path d="M10.9202 63.195C10.6402 62.415 10.2802 61.675 9.66016 61.105C8.99016 60.495 8.21016 60.095 7.32016 59.985C7.29016 59.945 7.26016 59.915 7.23016 59.875C6.86016 59.505 6.41016 59.245 5.91016 59.105C5.38016 58.965 4.85016 58.965 4.31016 59.105C3.30016 59.385 2.49016 60.195 2.21016 61.205C1.82016 62.615 1.98016 64.215 2.63016 65.545C2.67016 65.815 2.72016 66.095 2.78016 66.355C3.06016 67.555 3.78016 68.815 4.73016 69.595C5.13016 69.925 5.55016 70.225 6.05016 70.365C6.70016 70.545 7.39016 70.475 8.00016 70.215C8.49016 70.005 8.87016 69.715 9.20016 69.295C9.29016 69.175 9.36016 69.055 9.43016 68.945C9.75016 68.795 10.0502 68.595 10.2602 68.375L10.7302 67.765C11.0002 67.295 11.1402 66.795 11.1402 66.255C11.1802 65.845 11.2102 65.445 11.1902 65.035C11.1602 64.435 11.1102 63.785 10.9002 63.215L10.9202 63.195Z" fill="#323E45" />
                    <Path d="M9.99499 5.15113C8.95499 2.77113 7.18499 0.951137 4.67499 0.111137C3.99499 -0.118863 2.96499 0.0211358 2.36499 0.411136C1.67499 0.851136 1.27499 1.43113 0.984991 2.20113C0.434991 3.67113 -0.0550083 5.24113 0.00499166 6.83113C0.0849917 8.66113 0.744991 10.3911 2.22499 11.5411C2.53499 11.7811 2.86499 11.9911 3.20499 12.1711C3.97499 13.1611 5.01499 13.9211 6.29499 14.1011C6.86499 14.1811 7.36499 14.2111 7.89499 14.0611C8.02499 14.3111 8.17499 14.5611 8.39499 14.7711C8.91499 15.2911 9.76499 15.6811 10.515 15.6511C12.025 15.5811 13.655 14.3211 13.515 12.6511C13.265 9.75113 12.035 7.13113 9.99499 5.15113Z" fill="#323E45" />
                </Svg>

            </View>
            <View style={tw`absolute bottom-80      left-5`}>
                <Svg width="39" height="54" viewBox="0 0 39 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M17.9202 4.195C17.6402 3.415 17.2802 2.675 16.6602 2.105C15.9902 1.495 15.2102 1.095 14.3202 0.984999C14.2902 0.944999 14.2602 0.915 14.2302 0.875C13.8602 0.505 13.4102 0.245 12.9102 0.105C12.3802 -0.035 11.8502 -0.035 11.3102 0.105C10.3002 0.385 9.49016 1.195 9.21016 2.205C8.82016 3.615 8.98016 5.215 9.63016 6.545C9.67016 6.815 9.72016 7.095 9.78016 7.355C10.0602 8.555 10.7802 9.815 11.7302 10.595C12.1302 10.925 12.5502 11.225 13.0502 11.365C13.7002 11.545 14.3902 11.475 15.0002 11.215C15.4902 11.005 15.8702 10.715 16.2002 10.295C16.2902 10.175 16.3602 10.055 16.4302 9.945C16.7502 9.795 17.0502 9.595 17.2602 9.375L17.7302 8.765C18.0002 8.295 18.1402 7.795 18.1402 7.255C18.1802 6.845 18.2102 6.445 18.1902 6.035C18.1602 5.435 18.1102 4.785 17.9002 4.215L17.9202 4.195Z" fill="#323E45" />
                    <Path d="M37.9202 31.195C37.6402 30.415 37.2802 29.675 36.6602 29.105C35.9902 28.495 35.2102 28.095 34.3202 27.985C34.2902 27.945 34.2602 27.915 34.2302 27.875C33.8602 27.505 33.4102 27.245 32.9102 27.105C32.3802 26.965 31.8502 26.965 31.3102 27.105C30.3002 27.385 29.4902 28.195 29.2102 29.205C28.8202 30.615 28.9802 32.215 29.6302 33.545C29.6702 33.815 29.7202 34.095 29.7802 34.355C30.0602 35.555 30.7802 36.815 31.7302 37.595C32.1302 37.925 32.5502 38.225 33.0502 38.365C33.7002 38.545 34.3902 38.475 35.0002 38.215C35.4902 38.005 35.8702 37.715 36.2002 37.295C36.2902 37.175 36.3602 37.055 36.4302 36.945C36.7502 36.795 37.0502 36.595 37.2602 36.375L37.7302 35.765C38.0002 35.295 38.1402 34.795 38.1402 34.255C38.1802 33.845 38.2102 33.445 38.1902 33.035C38.1602 32.435 38.1102 31.785 37.9002 31.215L37.9202 31.195Z" fill="#323E45" />
                    <Path d="M9.99499 43.1511C8.95499 40.7711 7.18499 38.9511 4.67499 38.1111C3.99499 37.8811 2.96499 38.0211 2.36499 38.4111C1.67499 38.8511 1.27499 39.4311 0.984991 40.2011C0.434991 41.6711 -0.0550083 43.2411 0.00499166 44.8311C0.0849917 46.6611 0.744991 48.3911 2.22499 49.5411C2.53499 49.7811 2.86499 49.9911 3.20499 50.1711C3.97499 51.1611 5.01499 51.9211 6.29499 52.1011C6.86499 52.1811 7.36499 52.2111 7.89499 52.0611C8.02499 52.3111 8.17499 52.5611 8.39499 52.7711C8.91499 53.2911 9.76499 53.6811 10.515 53.6511C12.025 53.5811 13.655 52.3211 13.515 50.6511C13.265 47.7511 12.035 45.1311 9.99499 43.1511V43.1511Z" fill="#323E45" />
                </Svg>

            </View>
            <BottomNavigator />

        </View>
    );

}

const styles = StyleSheet.create({
    svg: {
        width: "fit-content",
        background: "red",
    }
})

export default GuidedMeditationPart3Screen;
