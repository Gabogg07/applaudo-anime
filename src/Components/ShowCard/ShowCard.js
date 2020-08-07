import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../Images/images';

class ShowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {props} = this;
    const {data, navigation} = props;

    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('ShowDetail', {
            showId: data.id,
            showType: data.type,
          })
        }>
        <View style={styles.cardContainer}>
          <Image
            style={[styles.showImage, props.styles]}
            source={{uri: data.attributes.posterImage.medium}}
            defaultSource={images.showPlaceHolder}
          />
          <View style={[props.styles, styles.titleContainer]}>
            <Text style={styles.title} numberOfLines={4}>
              {data.attributes.titles.en || data.attributes.titles.en_jp}
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
    borderRadius: 5,
  },
  titleContainer: {
    flex: 1,
    marginTop: 5,
  },
  title: {
    color: 'white',
  },
});
