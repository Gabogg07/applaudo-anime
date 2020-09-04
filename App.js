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
// import store from './src/Store/configureStore';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ShowDetailScreen from './src/Screens/ShowDetailScreen/ShowDetailScreen';
import YoutubeVideoScreen from './src/Screens/YoutubeVideoScreen/YoutubeVideoScreen';
import SearchResultsScreen from './src/Screens/SearchResultsScreen/SearchResultsScreen';
import SearchBar from './src/Components/SearchBar/SearchBar';

import {ShowsContextProvider} from './src/Store/ShowProvider';

const Stack = createStackNavigator();

function App() {
  return (
    <ShowsContextProvider>
    {/* <Provider store={store}> */}
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{header: () => <SearchBar />}}
          />
          {/* <Stack.Screen
            name="ShowDetail"
            component={ShowDetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="YoutubeVideo"
            component={YoutubeVideoScreen}
            options={{headerShown: false}}
          />*/}
          <Stack.Screen
            name="SearchResults"
            component={SearchResultsScreen}
            options={{header: () => <SearchBar />}}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    {/* </Provider> */}
    </ShowsContextProvider>
  );
}

export default App;
