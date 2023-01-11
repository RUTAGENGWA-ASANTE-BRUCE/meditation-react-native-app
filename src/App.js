/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Circle, Svg, Path } from 'react-native-svg';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import tw from 'twrnc';
import RelaxationTemplate from './components/RelaxationTemplate';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Flower } from './utils/Icons';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import HowAreYouFeelingScreen from './screens/HowAreYouFeelingScreen';
import HomeScreen from './screens/HomeScreen';
const Stack = createStackNavigator();
const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, margin: 0, padding: 0 }}>

      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HowAreYouFeeling"
            component={HowAreYouFeelingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
