import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {randomCharacterPlaceHolder} from '../../utilities';
import images from '../../Images/images'

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCharacter();
    console.log(randomCharacterPlaceHolder())
  }

  render() {
    const {props} = this;
    const {data, navigation} = props;

    if (!props.data || props.data.loading) {
      return (
        <View style={[styles.cardContainer, styles.titleContainer]}>
          <ActivityIndicator color="white" />
        </View>
      );
    }
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log('Insert character detail view if desired')}>
        <View style={styles.cardContainer}>
          <Image
            style={[styles.showImage, props.styles]}
            source={{
              uri: data.attributes.image && data.attributes.image.original,
            }}
            defaultSource={images[randomCharacterPlaceHolder()]}
          />
          <View style={[props.styles, styles.titleContainer]}>
            <Text style={styles.title}>{data.attributes.canonicalName}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <CharacterCard {...props} navigation={navigation} />;
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
