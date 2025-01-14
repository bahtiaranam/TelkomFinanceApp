/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {privateRoute} from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {privateRoute.map(item => (
            <Stack.Screen
              key={item.key}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          ))} */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
