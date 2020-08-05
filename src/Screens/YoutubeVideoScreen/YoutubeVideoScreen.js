import React, {Component} from 'react';
import {View, SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

class YoutubeVideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
      youtube_id: this.props.route.params.youtubeId,
    };
  }

  hideSpinner = () => {
    this.setState({
      showSpinner: false,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.webviewContainer}>
          <WebView
            allowsFullscreenVideo={true}
            source={{
              uri: `https://www.youtube.com/watch?v=${this.state.youtube_id}&autoplay=1&`,
            }}
            onLoadProgress={({nativeEvent}) => {
              let loadingProgress = nativeEvent.progress;
              if (loadingProgress > 0.8) {
                this.hideSpinner();
              }
            }}
          />
        </View>
        {this.state.showSpinner && (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  webviewContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  spinnerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: 'black',
  },
});

export default YoutubeVideoCard;
