# Applaudo

Anime and manga listing application with usage of [Kitsu API](https://kitsu.docs.apiary.io/) developed under React Native 0.63

## Installation
This instructions consider that the node environment and react native requirements have been fulfilled 

```bash
yarn install
npx pod-install # Optional for iOS 
```

## Run

```bash
npx run ios # for running iOS
react-native run-android # for running android
```

## External libraries used


[React Navigation](https://reactnavigation.org/)
[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
[React Native WebView](https://github.com/react-native-community/react-native-webview)
[React Redux](https://react-redux.js.org/)


## Considerations
- For general data management and fetch calls redux was used with the react-redux-toolkit configuration. For simplicity a single store was configured
- Manga show details contain no episodes segment as the Kitsu API did not provide any information regarding each chapter (besides the id)
- Shows with only one chapter wont show chapter segment either
- Trying to stick to the given design, no back buttons on headers have been provided. To navigate back the native method must be used (Swipe back on iOS, back hardware button on Android)
- No credits taken for the placeholder images or the app icon

## Author
Gabriel Eduardo Gutierrez Garcia
Gabrieleduardogg@gmail.com