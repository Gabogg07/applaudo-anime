import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

class YoutubeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation, youtubeId} = this.props;
    return (
      <TouchableWithoutFeedback
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('YoutubeVideo', {youtubeId: youtubeId});
        }}>
        <Text style={styles.title}>Watch</Text>
        <Icon name="logo-youtube" size={30} />
      </TouchableWithoutFeedback>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <YoutubeButton {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fb402d',
    backgroundColor: '#fb402d',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
