import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Platform
} from 'react-native';
import WebView from 'react-native-webview';

class YoutubeVideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
      youtube_id: this.props.route.params.youtubeId
    };
  }


  hideSpinner = () => {
    this.setState({
      showSpinner: false
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View style={{
          width: '100%', height:'100%', justifyContent: 'center', alignContent: 'center'
        }}
        >
          <WebView
            allowsFullscreenVideo = {true}
            source={{ uri: `https://www.youtube.com/watch?v=${this.state.youtube_id}&autoplay=1&` }}
            onLoadProgress={({ nativeEvent }) => {
              let loadingProgress = nativeEvent.progress;
              if(loadingProgress > 0.2) this.hideSpinner() 
            }}
          />
        </View>
        {this.state.showSpinner &&
            <View style={{ width: '100%', height:'100%', justifyContent: 'center', alignContent: 'center', position:'absolute', top:0,}}>
              <ActivityIndicator size='large'/>
            </View>
          }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    height: 45,
    width: 50,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: Platform.OS === 'android' ? 15 : 10
  }
});

export default YoutubeVideoCard;
