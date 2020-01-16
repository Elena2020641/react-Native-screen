/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import FirstScreen from './src/FirstScreen';
import ImageScreen from './src/ImageScreen';

import CardFlat from './src/CardFlat';
import Card from './src/Card';

const stack = createStackNavigator({
  First: {screen: FirstScreen},
  Image: {screen: ImageScreen},

  // CardFlat: {screen: CardFlat},
  // Card: {screen: Card},

  InitialRouteName: 'First',

});

const App = createAppContainer(stack);

export default App;
