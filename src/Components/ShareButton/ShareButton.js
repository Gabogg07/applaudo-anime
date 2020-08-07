import React, {Component} from 'react';
import {Text, StyleSheet, Share, Platform} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Share button component, on press shared a message with the show title to the selected app
 */
class ShareButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onShare = async (message) => {
    try {
      await Share.share({
        message,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const {title} = this.props;
    return (
      <TouchableWithoutFeedback
        style={styles.buttonContainer}
        onPress={() => this.onShare(shareMessage(title))}>
        <Text style={styles.title}>Share</Text>
        <Icon
          name={
            Platform.OS === 'android' ? 'share-social-outline' : 'share-outline'
          }
          size={30}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default ShareButton;

const shareMessage = (title) =>
  `Have you seen ${title}?\nI just discovered in Applaudio app`;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: '#83bce5',
    backgroundColor: '#83bce5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
