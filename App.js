/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './src/Store/configureStore';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ShowDetailScreen from './src/Screens/ShowDetailScreen/ShowDetailScreen';
import YoutubeVideoScreen from './src/Screens/YoutubeVideoScreen/YoutubeVideoScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="ShowDetail"
            component={ShowDetailScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="YoutubeVideo"
            component={YoutubeVideoScreen}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
