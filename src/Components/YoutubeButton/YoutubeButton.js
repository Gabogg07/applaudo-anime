import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

class YoutubeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableWithoutFeedback
        style={styles.buttonContainer}>
        <Text style={styles.title}>Watch</Text>
        <Icon name="logo-youtube" size={30} color="#900" />
      </TouchableWithoutFeedback>
    );
  }
}

export default YoutubeButton;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer:{
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fb402d',
    backgroundColor: '#fb402d',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
