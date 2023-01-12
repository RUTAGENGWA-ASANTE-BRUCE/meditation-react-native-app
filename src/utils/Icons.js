import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path, Circle, Rect } from 'react-native-svg'


const QuestionMarkCircled = () => {
    return (
        <Svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="14.5" cy="14.5" r="14" stroke="#DEE4BB" />
            <Path d="M13.0859 17.7045V17.6151C13.0958 16.6655 13.1953 15.9098 13.3842 15.348C13.5731 14.7862 13.8416 14.3313 14.1896 13.9833C14.5376 13.6353 14.9552 13.3146 15.4424 13.0213C15.7358 12.8423 15.9992 12.631 16.2329 12.3874C16.4666 12.1388 16.6505 11.853 16.7848 11.5298C16.924 11.2067 16.9936 10.8487 16.9936 10.456C16.9936 9.96875 16.8792 9.54616 16.6505 9.18821C16.4218 8.83026 16.1161 8.55433 15.7333 8.36044C15.3505 8.16655 14.9254 8.0696 14.4581 8.0696C14.0504 8.0696 13.6576 8.15412 13.2798 8.32315C12.9019 8.49219 12.5862 8.75817 12.3327 9.12109C12.0791 9.48402 11.9325 9.95881 11.8927 10.5455H10.0134C10.0532 9.70028 10.272 8.97692 10.6697 8.37535C11.0724 7.77379 11.6019 7.31392 12.2581 6.99574C12.9193 6.67756 13.6527 6.51847 14.4581 6.51847C15.3331 6.51847 16.0937 6.69247 16.74 7.04048C17.3913 7.38849 17.8934 7.86577 18.2464 8.4723C18.6044 9.07883 18.7833 9.76989 18.7833 10.5455C18.7833 11.0923 18.6988 11.587 18.5298 12.0295C18.3657 12.4719 18.1271 12.8672 17.8139 13.2152C17.5056 13.5632 17.1328 13.8714 16.6953 14.1399C16.2578 14.4134 15.9073 14.7017 15.6438 15.005C15.3803 15.3033 15.1889 15.6587 15.0696 16.0714C14.9502 16.484 14.8856 16.9986 14.8757 17.6151V17.7045H13.0859ZM14.0404 22.1193C13.6725 22.1193 13.3568 21.9876 13.0934 21.7241C12.8299 21.4606 12.6981 21.1449 12.6981 20.777C12.6981 20.4091 12.8299 20.0934 13.0934 19.8299C13.3568 19.5664 13.6725 19.4347 14.0404 19.4347C14.4083 19.4347 14.724 19.5664 14.9875 19.8299C15.251 20.0934 15.3828 20.4091 15.3828 20.777C15.3828 21.0206 15.3206 21.2443 15.1963 21.4482C15.077 21.652 14.9154 21.8161 14.7116 21.9403C14.5127 22.0597 14.289 22.1193 14.0404 22.1193Z" fill="#D3DAB4" />
        </Svg>

    )
}

const PlayVideoAudio = () => {
    return (
        <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="18" cy="18" r="18" fill="#323E45" />
            <Path d="M23.04 18L15.48 22.3648L15.48 13.6352L23.04 18Z" fill="#DEE4BB" />
        </Svg>
    )
}

const Profile = () => {
    return (
        <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11.0439 10.8144C13.8206 10.8144 16.0716 8.5634 16.0716 5.78665C16.0716 3.00991 13.8206 0.758911 11.0439 0.758911C8.26711 0.758911 6.01611 3.00991 6.01611 5.78665C6.01611 8.5634 8.26711 10.8144 11.0439 10.8144Z" fill="white" />
            <Path d="M20.2832 23.3909C21.2286 23.3909 21.9591 22.4742 21.6583 21.5574C20.2116 17.074 16.0146 13.8224 11.0442 13.8224C6.07374 13.8224 1.87679 17.074 0.430065 21.5574C0.143584 22.4598 0.859786 23.3909 1.80517 23.3909H20.2832Z" fill="white" />
        </Svg>

    )
}
const Chat = () => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M21.4253 20.0342C23.2292 17.913 24.3177 15.1644 24.3177 12.1617C24.3177 5.44652 18.874 0.00280762 12.1589 0.00280762C5.44371 0.00280762 0 5.44652 0 12.1617C0 18.8768 5.44371 24.3205 12.1589 24.3205C14.0443 24.3205 15.8295 23.8914 17.4221 23.1255L22.2704 24.9052L21.4253 20.0342Z" fill="white" />
        </Svg>


    )
}
const Settings = () => {
    return (
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15.1418 5.16556C20.7592 5.16556 25.3129 9.71932 25.3129 15.3367C25.3129 20.954 20.7592 25.5078 15.1418 25.5078C9.52447 25.5078 4.9707 20.954 4.9707 15.3367C4.9707 9.71932 9.52447 5.16556 15.1418 5.16556Z" fill="white" />
            <Path d="M15.1414 10.5188C17.8022 10.5188 19.9593 12.6758 19.9593 15.3366C19.9593 17.9975 17.8022 20.1545 15.1414 20.1545C12.4805 20.1545 10.3235 17.9975 10.3235 15.3366C10.3235 12.6758 12.4805 10.5188 15.1414 10.5188Z" fill="#69594E" />
            <Path d="M15.0666 12.7028C16.5626 12.7028 17.7754 13.9156 17.7754 15.4115C17.7754 16.9075 16.5626 18.1203 15.0666 18.1203C13.5706 18.1203 12.3579 16.9075 12.3579 15.4115C12.3579 13.9156 13.5706 12.7028 15.0666 12.7028Z" fill="white" />
            <Path d="M15.3128 0.986603L12.3384 6.13837H18.2872L15.3128 0.986603Z" fill="white" />
            <Path d="M15.3128 29.8365L12.3384 24.6848H18.2872L15.3128 29.8365Z" fill="white" />
            <Path d="M0.887451 15.4115L6.03922 18.3858L6.03922 12.4371L0.887451 15.4115Z" fill="white" />
            <Path d="M29.7378 15.4115L24.586 18.3858L24.586 12.4371L29.7378 15.4115Z" fill="white" />
            <Path d="M24.5416 6.18298L19.5979 7.50766L23.2169 11.1267L24.5416 6.18298Z" fill="white" />
            <Path d="M6.08435 24.6402L7.40902 19.6964L11.0281 23.3155L6.08435 24.6402Z" fill="white" />
            <Path d="M6.08435 6.18302L7.40902 11.1268L11.0281 7.5077L6.08435 6.18302Z" fill="white" />
            <Path d="M24.5416 24.6402L19.5979 23.3155L23.2169 19.6964L24.5416 24.6402Z" fill="white" />
        </Svg>


    )
}

const Heart = () => {
    return (
        <Svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M24.5141 2.32882C23.0589 0.826891 21.1262 0 19.0738 0C17.0215 0 15.1337 0.805536 13.6864 2.2695C12.2381 0.805536 10.3249 0 8.29905 0C6.27317 0 4.31402 0.826891 2.85874 2.32882C-0.089765 5.37064 -0.0276436 10.574 2.99449 13.6906L12.5015 23.4946C12.8179 23.8209 13.2389 24 13.6864 24C14.1339 24 14.5561 23.8197 14.8714 23.4934L24.3795 13.6894C27.4017 10.5728 27.4638 5.36945 24.5153 2.32763L24.5141 2.32882Z" fill="#B1BF80" />
        </Svg>

    )
}

const ThumbsUp = () => {
    return (
        <Svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M22.4643 9.53835H26.9302V24H22.4643V9.53835Z" fill="#B1BF80" />
            <Path d="M0.339571 13.9521L4.15273 22.5393C4.54723 23.4264 5.42855 23.9989 6.40436 23.9989H17.068C18.4284 23.9989 19.5317 22.902 19.5317 21.5495V9.47062C19.5317 8.82057 19.2724 8.19784 18.8098 7.73898L11.0977 0.071697C11.0021 -0.023352 10.8461 -0.0244445 10.7494 0.071697L9.4395 1.3707C9.20874 1.59904 9.10654 1.92679 9.16698 2.24581L10.3417 8.45786H3.94614C1.09781 8.45786 -0.808771 11.3672 0.339571 13.9543V13.9521Z" fill="#B1BF80" />
        </Svg>
    )
}

const ArrowRight = () => {
    return (
        <Svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M26.687 11.5717L15.8949 0L15.9447 7.12449C14.2822 7.56667 12.6579 8.19934 11.1555 9.04907C9.22777 10.132 7.51856 11.5509 6.11703 13.158C3.29698 16.3952 1.70872 20.2247 0.687012 24C2.9893 20.9475 5.73615 18.3671 8.70154 17.0233C11.1587 15.8872 13.6329 15.6552 16.0073 16.0419L16.0583 23.3177L26.687 11.5705V11.5717Z" fill="#B1BF80" />
        </Svg>

    )
}

const Documents = () => {
    return (
        <Svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.9547 0.0405579H1C0.447715 0.0405579 0 0.488274 0 1.04056V23.5721C0 24.1244 0.447715 24.5721 1 24.5721H17.7594C18.3117 24.5721 18.7594 24.1244 18.7594 23.5721V6.80771H13.9547C12.8501 6.80771 11.9547 5.91228 11.9547 4.80771V0.0405579Z" fill="white" />
            <Path d="M11.9546 5.29549V0.00280762L18.7595 6.80769H13.4668C12.257 6.80769 11.9546 5.79956 11.9546 5.29549Z" fill="#979797" />
        </Svg>



    )
}

const Home = () => {
    return (
        <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.52202 23.9564H19.2727C20.5951 23.9564 21.6727 22.8789 21.6604 21.5565V10.2424C21.6604 9.54445 21.3543 8.871 20.8155 8.41794L12.4402 1.32829C11.5463 0.569119 10.2362 0.569119 9.3423 1.32829L0.966952 8.41794C0.428187 8.871 0.12207 9.53221 0.12207 10.2424V21.5565C0.12207 22.8789 1.1996 23.9564 2.52202 23.9564ZM7.90961 14.381H13.8972V23.9563H7.90961V14.381Z" fill="white" />
        </Svg>

    )
}
const styles = StyleSheet.create({})

export {
    QuestionMarkCircled,
    PlayVideoAudio,
    Documents,
    Settings,
    Chat,
    Home,
    Profile,
    Heart,
    ArrowRight,
    ThumbsUp
};
