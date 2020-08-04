import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class ShowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {props} = this;
    const {show, navigation} = props;
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ShowDetail', {showId: show.id})}>
        <View style={styles.cardContainer}>
          <Image
            style={[styles.showImage, props.styles]}
            source={{uri: show.attributes.posterImage.medium}}
          />
          <View style={[props.styles, styles.titleContainer]}>
            <Text style={styles.title}>
              {show.attributes.titles.en || show.attributes.titles.en_jp}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <ShowCard {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  showImage: {
    aspectRatio: 3 / 4,
  },
  titleContainer: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
  },
});

