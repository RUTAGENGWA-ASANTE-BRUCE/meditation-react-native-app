import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import tw from 'twrnc'
import { Svg, Path, Circle, Rect } from 'react-native-svg'
import { ArrowRight, Close, Heart, MoreThreeDots, MoveBackCircled, PlayVideoAudio, QuestionMarkCircled, ThumbsUp, Youtube } from '../utils/Icons';
import { Dimensions } from 'react-native';
import Slider from '../components/Slider';
import BottomNavigator from '../components/BottomNavigator';
import Video from 'react-native-video';

const FAQOpenVideoScreen = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('screen').width);
    const [error, setError] = useState({ isReady: true });
    const [videoXtics, setVideoXtics] = useState({ currentTime: 0, duration: 0 })
    const [isReady, setIsReady] = useState({ isReady: true });
    return (
        <View style={tw`bg-[#A3846B] h-full  flex`}>
            <View style={tw`absolute top-0 left-0`}>
                <Svg width="391" height="133" viewBox="0 0 391 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M-144.209 91.2661C-162.696 72.2648 -176.743 48.5061 -185.505 24.0739C-197.821 -10.3548 -201.859 -47.1545 -203.945 -83.6736C-210.772 -201.647 -166.94 -334.862 -38.9083 -363.969C46.9924 -383.47 137.306 -353.624 212.69 -313.495C323.451 -254.533 474.581 -81.7094 333.915 32.7895C258.287 94.335 143.398 63.1632 56.3101 94.1232C15.5299 108.635 -23.7235 137.344 -68.9859 131.18C-98.5196 127.129 -123.991 112.054 -144.209 91.2661Z" fill="#5A786F" />
                </Svg>
            </View>
            <View style={tw`absolute right-10  top-3 `}>
                <QuestionMarkCircled />
            </View>
            <View style={tw`absolute top-2 left-5`}>
                <Svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="29.5" cy="29.5" r="29" stroke="#DEE4BB" />
                </Svg>
            </View>
            <View style={tw`absolute top-15 right-25`}>
                <Svg width="65" height="80" viewBox="0 0 65 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M8.82649 69.26C8.45264 68.8724 7.97932 68.5534 7.48541 68.4436C6.74112 68.2652 5.90935 68.2909 5.24048 68.7059C5.03125 68.8603 4.82201 69.0146 4.61278 69.1689C4.48243 69.289 4.39496 69.4347 4.29034 69.5702C4.19773 69.6079 4.11026 69.6371 4.01251 69.6834C3.54773 69.8943 3.12755 70.2253 2.73137 70.5357C2.33519 70.8461 2.02476 71.2662 1.72462 71.6692C1.6543 71.767 1.58741 71.8785 1.53424 71.9865C1.36444 72.3278 1.19807 72.6828 1.08486 73.0463C1.01797 73.2744 0.990514 73.5145 0.963062 73.7546C0.92532 74.0119 0.873859 74.2725 0.894426 74.5298C0.940689 75.3856 1.07958 75.9121 1.41911 76.6873C1.46884 76.7987 1.52714 76.9154 1.59059 77.0234C1.78265 77.3253 2.00559 77.634 2.2491 77.9084C2.93163 78.6561 3.89542 79.1878 4.84723 79.4674C5.86934 79.7659 6.86232 79.7436 7.89647 79.5945C8.43155 79.5191 8.92719 79.315 9.42797 79.1024C9.91847 78.9069 10.3524 78.5725 10.7588 78.2449C10.8686 78.1592 10.9664 78.0546 11.059 77.9585C11.3145 77.6687 11.5992 77.3498 11.7827 77.005C12.2201 76.2179 12.3436 75.6039 12.4603 74.7293C12.4757 74.3537 12.4003 73.9936 12.246 73.6677C12.258 73.57 12.2734 73.4859 12.2854 73.3882C12.2854 72.8634 12.162 72.3695 11.9151 71.9064C11.723 71.4296 11.3972 71.0009 11.0576 70.6338C10.809 70.368 10.4986 70.1468 10.2105 69.9272C10.1041 69.8518 9.9978 69.7763 9.88633 69.7094C9.5502 69.531 9.19349 69.387 8.82135 69.2686L8.82649 69.26Z" fill="#DEE4BB" />
                    <Path d="M35.0187 53.3257C32.9984 52.8248 30.7346 53.274 29.0402 54.4847C28.0249 55.205 27.2771 55.9458 26.5362 56.9473C25.9702 57.7156 25.5551 58.6211 25.2395 59.5163C25.1863 59.6826 25.1332 59.849 25.0886 60.0205C24.857 60.8728 24.9067 61.684 25.2994 62.4678C25.5395 62.9617 25.8944 63.4196 26.2631 63.8158C27.0143 64.6047 27.9558 65.1347 28.983 65.4829C30.3653 65.9392 31.9208 65.8929 33.3425 65.4866C33.466 65.514 33.5929 65.5552 33.7215 65.574C34.6596 65.7404 35.6149 65.8005 36.5273 65.485C37.7346 65.0666 38.6539 64.3704 39.3725 63.3088C40.6383 61.4327 40.4617 59.0643 39.546 57.092C38.7144 55.3101 36.9394 53.7785 35.0204 53.3034L35.0187 53.3257Z" fill="#DEE4BB" />
                    <Path d="M28.717 30.7681C27.6812 30.3564 26.5322 30.3667 25.4551 30.5484C24.9869 30.629 24.5307 30.7868 24.1037 30.9737C23.5841 30.9651 23.0284 31.0748 22.6099 31.3252C21.8433 31.7865 21.2876 32.5959 21.1126 33.4705C20.7902 33.9885 20.5364 34.5475 20.358 35.1169C19.9583 36.4048 20.6185 37.7923 21.7041 38.4903L26.3241 41.4609C27.4268 42.1693 29.0235 41.9378 29.9582 41.0409C29.9719 41.0375 29.9856 41.0341 29.9993 41.0306C30.7076 40.8609 31.4983 40.5539 32.0402 40.0395C32.1809 39.9023 32.3043 39.7548 32.4244 39.5936C33.0538 39.2832 33.5409 38.7241 33.8239 38.0776C34.2167 37.1704 34.1138 36.3506 33.7246 35.464C33.3199 34.5447 32.6288 33.7335 31.7902 33.0903C31.6804 32.9428 31.5844 32.7919 31.4695 32.653C30.7544 31.7457 29.7752 31.1815 28.7222 30.7595L28.717 30.7681Z" fill="#DEE4BB" />
                    <Path d="M60.0359 35.7534C59.374 35.4962 58.6691 35.3881 57.9608 35.3246C57.7156 35.3057  57.4823 35.3057 57.2337 35.3314C56.7638 35.376 56.2767 35.4103 55.8342 35.5646C55.0093 35.8509 54.2478 36.187 53.6493 36.8541C53.0799 37.4921 52.6099 38.2364 52.4281 39.0836C52.1245 40.4641 52.2359 41.9887 52.9527 43.2236C53.5186 44.2046 54.34 44.8957 55.4102 45.2697C55.7943 45.4069 56.2162 45.4618 56.6209 45.4481C57.3755 45.4344 57.8643 45.2612 58.5469 44.9594C58.7647 44.8685 58.9568 44.7039 59.1454 44.5255C60.1624 44.4827 61.1091 44.2461 62.0266 43.8054C62.5017 43.5773 62.9493 43.2395 63.3386 42.9017C63.7468 42.5518 64.0916 42.0939 64.39 41.6549C64.7896 41.0667 64.9337 40.0686 64.7262 39.3843C64.6371 39.1442 64.5428 38.9127 64.445 38.6674C64.1809 38.1941 63.8242 37.8167 63.3612 37.5389C62.3151 36.7945 61.2347 36.2045 60.0325 35.7397L60.0359 35.7534Z" fill="#DEE4BB" />
                    <Path d="M37.8816 0.802616C35.8733 0.0290595 33.414 0.512561 31.7779 1.89819C29.9926 2.19137 28.3238 3.18426 27.2416 4.65738C26.3635 5.86812 26.1302 7.44247 26.4371 8.8745C26.768 10.4026 27.7918 11.6117 28.9751 12.555C30.8255 14.0385 33.1921 14.9339 35.5862 14.9477C38.1913 14.9598 40.7775 13.8178 42.2062 11.5729C43.5063 9.54245 43.3023 7.06429 42.3798 4.94795C41.5378 3.00826 39.8297 1.54015 37.8781 0.788894L37.8816 0.802616Z" fill="#DEE4BB" />
                </Svg>

            </View>
            <View style={tw`mt-50 flex items-center justify-center `}>
                <View style={tw`w-[328px]`}>

                    <View style={tw``}>
                        <View style={tw`absolute right-0 -top-5 `}>
                            <Close />
                        </View>
                        <Video
                            style={tw`w-[328px] h-[208px] bg-black rounded-3xl`}
                            source={{ uri: `https://youtu.com/watch?v49ZjNmgckzs` }}
                        />
                        <Pressable style={tw`absolute left-[120px] top-[80px] `}>
                            <Youtube />
                        </Pressable>
                    </View>
                    <View style={tw`flex mt-5 w-full`}>
                        <Text style={tw`text-white text-xl font-smeibold`}>What is meditation?</Text>
                        <Text style={tw`text-white font-light text-xs mt-2`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={tw`absolute left-10 top-50.808C379`}>
                <Svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M8.82649 1.63655C8.45264 1.24895 7.97932 0.92994 7.48541 0.820156C6.74112 0.641762 5.90935 0.667445 5.24048 1.08244C5.03125 1.23678 4.82201 1.39112 4.61278 1.54545C4.48243 1.6655 4.39496 1.81127 4.29034 1.94675C4.19773 1.98447 4.11026 2.01362 4.01251 2.05992C3.54773 2.27084 3.12755 2.60181 2.73137 2.91221C2.33519 3.2226 2.02476 3.64276 1.72462 4.04576C1.6543 4.14351 1.58741 4.25498 1.53424 4.36303C1.36444 4.7043 1.19807 5.0593 1.08486 5.42287C1.01797 5.65096 0.990514 5.89105 0.963062 6.13115C0.92532 6.3884 0.873859 6.64907 0.894426 6.90632C0.940689 7.7621 1.07958 8.28861 1.41911 9.0638C1.46884 9.17527 1.52714 9.2919 1.59059 9.39994C1.78265 9.70179 2.00559 10.0105 2.2491 10.2849C2.93163 11.0327 3.89542 11.5644 4.84723 11.844C5.86934 12.1424 6.86232 12.1202 7.89647 11.971C8.43155 11.8956 8.92719 11.6915 9.42797 11.4789C9.91847 11.2834 10.3524 10.949 10.7588 10.6215C10.8686 10.5357 10.9664 10.4311 11.059 10.3351C11.3145 10.0453 11.5992 9.72628 11.7827 9.38157C12.2201 8.59442 12.3436 7.98046 12.4603 7.10582C12.4757 6.73024 12.4003 6.37009 12.246 6.04423C12.258 5.94648 12.2734 5.86245 12.2854 5.76469C12.2854 5.23991 12.162 4.74598 11.9151 4.28293C11.723 3.80615 11.3972 3.37739 11.0576 3.01037C10.809 2.74453 10.4986 2.52328 10.2105 2.30375C10.1041 2.22829 9.9978 2.15282 9.88633 2.08593C9.5502 1.90756 9.19349 1.76348 8.82135 1.64513L8.82649 1.63655Z" fill="#DEE4BB" />
                </Svg>
            </View>
            <View style={tw`absolute bottom-40 right-10`}>
                <Svg width="75" height="269" viewBox="0 0 75 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M13.8265 209.637C13.4526 209.249 12.9793 208.93 12.4854 208.82C11.7411 208.642 10.9093 208.668 10.2405 209.083C10.0312 209.237 9.82201 209.391 9.61278 209.546C9.48243 209.666 9.39496 209.811 9.29034 209.947C9.19773 209.985 9.11026 210.014 9.01251 210.06C8.54773 210.271 8.12755 210.602 7.73137 210.912C7.33519 211.223 7.02476 211.643 6.72462 212.046C6.6543 212.144 6.58741 212.255 6.53424 212.363C6.36444 212.704 6.19807 213.059 6.08486 213.423C6.01797 213.651 5.99051 213.891 5.96306 214.131C5.92532 214.388 5.87386 214.649 5.89443 214.906C5.94069 215.762 6.07958 216.289 6.41911 217.064C6.46884 217.175 6.52714 217.292 6.59059 217.4C6.78265 217.702 7.00559 218.011 7.2491 218.285C7.93163 219.033 8.89542 219.564 9.84723 219.844C10.8693 220.142 11.8623 220.12 12.8965 219.971C13.4315 219.896 13.9272 219.692 14.428 219.479C14.9185 219.283 15.3524 218.949 15.7588 218.622C15.8686 218.536 15.9664 218.431 16.059 218.335C16.3145 218.045 16.5992 217.726 16.7827 217.382C17.2201 216.594 17.3436 215.981 17.4603 215.106C17.4757 214.73 17.4003 214.37 17.246 214.044C17.258 213.947 17.2734 213.863 17.2854 213.765C17.2854 213.24 17.162 212.746 16.9151 212.283C16.723 211.806 16.3972 211.377 16.0576 211.01C15.809 210.745 15.4986 210.523 15.2105 210.304C15.1041 210.228 14.9978 210.153 14.8863 210.086C14.5502 209.908 14.1935 209.764 13.8213 209.645L13.8265 209.637Z" fill="#D3DAB4" />
                    <Path d="M33.7206 225.045C31.7003 224.544 29.4365 224.993 27.7421 226.204C26.7268 226.924 25.979 227.665 25.2381 228.666C24.6721 229.435 24.257 230.34 23.9414 231.235C23.8882 231.402 23.8351 231.568 23.7905 231.739C23.5589 232.592 23.6086 233.403 24.0013 234.187C24.2414 234.681 24.5964 235.139 24.9651 235.535C25.7162 236.324 26.6577 236.854 27.6849 237.202C29.0672 237.658 30.6227 237.612 32.0444 237.206C32.1679 237.233 32.2948 237.274 32.4234 237.293C33.3615 237.459 34.3168 237.52 35.2292 237.204C36.4365 236.786 37.3558 236.089 38.0744 235.028C39.3402 233.152 39.1637 230.783 38.2479 228.811C37.4163 227.029 35.6413 225.498 33.7223 225.022L33.7206 225.045Z" fill="#D3DAB4" />
                    <Path d="M7.78446 258.783C7.12249 258.526 6.41764 258.418 5.70935 258.354C5.46411 258.335 5.23087 258.335 4.9822 258.361C4.51229 258.405 4.02523 258.44 3.58276 258.594C2.75783 258.88 1.99637 259.217 1.39781 259.884C0.828399 260.522 0.358455 261.266 0.176625 262.113C-0.126995 263.494 -0.0155926 265.018 0.701211 266.253C1.26711 267.234 2.08855 267.925 3.15869 268.299C3.54284 268.436 3.96472 268.491 4.36945 268.478C5.12405 268.464 5.61283 268.291 6.29541 267.989C6.51322 267.898 6.7053 267.733 6.89396 267.555C7.91095 267.512 8.85763 267.276 9.77517 266.835C10.2502 266.607 10.6979 266.269 11.0872 265.931C11.4954 265.581 11.8401 265.123 12.1385 264.684C12.5381 264.096 12.6823 263.098 12.4748 262.414C12.3856 262.174 12.2913 261.942 12.1936 261.697C11.9295 261.224 11.5728 260.846 11.1097 260.568C10.0636 259.824 8.98322 259.234 7.78103 258.769L7.78446 258.783Z" fill="#D3DAB4" />
                    <Path d="M69.7845 0.782916C69.1225 0.525636 68.4176 0.417555 67.7094 0.354066C67.4641 0.335189 67.2309 0.335175 66.9822 0.360887C66.5123 0.405454 66.0252 0.439736 65.5828 0.594063C64.7578 0.880426 63.9964 1.21652 63.3978 1.88362C62.8284 2.52157 62.3585 3.26585 62.1766 4.11305C61.873 5.49359 61.9844 7.01822 62.7012 8.25305C63.2671 9.23405 64.0886 9.92522 65.1587 10.2991C65.5428 10.4364 65.9647 10.4913 66.3695 10.4776C67.124 10.4639 67.6128 10.2907 68.2954 9.98888C68.5132 9.898 68.7053 9.73337 68.894 9.55502C69.911 9.5122 70.8576 9.27558 71.7752 8.83487C72.2502 8.6068 72.6979 8.26897 73.0872 7.93114C73.4954 7.5813 73.8401 7.12342 74.1385 6.68439C74.5381 6.09617 74.6823 5.09806 74.4748 4.41377C74.3856 4.17366 74.2913 3.94214 74.1936 3.69689C73.9295 3.22354 73.5728 2.84623 73.1097 2.56838C72.0636 1.82402 70.9832 1.23401 69.781 0.769193L69.7845 0.782916Z" fill="#D3DAB4" />
                </Svg>
            </View>
            <View style={tw`absolute bottom-0`}>
                <Svg style={[styles.svg, { transform: [{ scaleX: (Dimensions.get('screen').width / 430) + 0.2 }] }]} width="430" height="179" viewBox="0 0 430 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M431 0C429.926 2.68972 428.892 5.41842 427.735 8.06916C420.979 23.4863 408.643 37.734 391.287 44.2829C387.113 45.8617 382.794 46.9532 378.393 47.7718C364.673 50.3445 350.085 50.3445 336.675 54.2037C287.767 68.2565 272.663 125.735 226.875 146.297C212.287 152.846 195.571 155.068 179.186 154.971C162.118 154.873 145.154 152.359 128.542 148.968C114.594 146.122 100.792 142.614 86.6174 140.84C59.6114 137.449 27.7498 141.093 0 151.579V186H431V0Z" fill="#DEE4BB" />
                    <Path d="M441.772 287.44C442.745 313.933 437.233 340.978 427.349 364.978C413.398 398.778 391.716 428.785 368.774 457.275C294.727 549.369 172.879 618.799 58.3825 554.535C-18.4182 511.397 -65.402 428.693 -94.4135 348.373C-137.041 230.358 -133.26 0.806421 47.8714 10.1963C145.246 15.2554 209.572 115.423 294.937 150.856C334.92 167.437 383.292 172.463 412.735 207.388C431.928 230.198 440.714 258.461 441.772 287.44V287.44Z" fill="#B1BF80" />
                </Svg>

            </View>
            <View style={tw`absolute bottom-8 left-8`}>
                <MoveBackCircled />
            </View>
            <View style={tw`absolute bottom-8 right-8`}>
                <MoreThreeDots />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FAQOpenVideoScreen;
