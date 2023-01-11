import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg'


const QuestionMarkCircled = () => {
    return (
        <Svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="14.5" cy="14.5" r="14" stroke="#DEE4BB" />
            <Path d="M13.0859 17.7045V17.6151C13.0958 16.6655 13.1953 15.9098 13.3842 15.348C13.5731 14.7862 13.8416 14.3313 14.1896 13.9833C14.5376 13.6353 14.9552 13.3146 15.4424 13.0213C15.7358 12.8423 15.9992 12.631 16.2329 12.3874C16.4666 12.1388 16.6505 11.853 16.7848 11.5298C16.924 11.2067 16.9936 10.8487 16.9936 10.456C16.9936 9.96875 16.8792 9.54616 16.6505 9.18821C16.4218 8.83026 16.1161 8.55433 15.7333 8.36044C15.3505 8.16655 14.9254 8.0696 14.4581 8.0696C14.0504 8.0696 13.6576 8.15412 13.2798 8.32315C12.9019 8.49219 12.5862 8.75817 12.3327 9.12109C12.0791 9.48402 11.9325 9.95881 11.8927 10.5455H10.0134C10.0532 9.70028 10.272 8.97692 10.6697 8.37535C11.0724 7.77379 11.6019 7.31392 12.2581 6.99574C12.9193 6.67756 13.6527 6.51847 14.4581 6.51847C15.3331 6.51847 16.0937 6.69247 16.74 7.04048C17.3913 7.38849 17.8934 7.86577 18.2464 8.4723C18.6044 9.07883 18.7833 9.76989 18.7833 10.5455C18.7833 11.0923 18.6988 11.587 18.5298 12.0295C18.3657 12.4719 18.1271 12.8672 17.8139 13.2152C17.5056 13.5632 17.1328 13.8714 16.6953 14.1399C16.2578 14.4134 15.9073 14.7017 15.6438 15.005C15.3803 15.3033 15.1889 15.6587 15.0696 16.0714C14.9502 16.484 14.8856 16.9986 14.8757 17.6151V17.7045H13.0859ZM14.0404 22.1193C13.6725 22.1193 13.3568 21.9876 13.0934 21.7241C12.8299 21.4606 12.6981 21.1449 12.6981 20.777C12.6981 20.4091 12.8299 20.0934 13.0934 19.8299C13.3568 19.5664 13.6725 19.4347 14.0404 19.4347C14.4083 19.4347 14.724 19.5664 14.9875 19.8299C15.251 20.0934 15.3828 20.4091 15.3828 20.777C15.3828 21.0206 15.3206 21.2443 15.1963 21.4482C15.077 21.652 14.9154 21.8161 14.7116 21.9403C14.5127 22.0597 14.289 22.1193 14.0404 22.1193Z" fill="#D3DAB4" />
        </Svg>

    )
}

const styles = StyleSheet.create({})

export {
    QuestionMarkCircled
};
