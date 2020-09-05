import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {randomCharacterPlaceHolder} from '../../utilities';
import images from '../../Images/images';

/**
 * Component for displaying the preview of a character, given the character id and fetch information function
 */

function CharacterCard(props) {
  useEffect(() => {
    props.getCharacter();
  }, []);

  const {data} = props;
  if (!data || data.loading) {
    return (
      <View style={[styles.cardContainer, styles.titleContainer]}>
        <ActivityIndicator color="white" />
      </View>
    );
  }
  const characterData = data.data;
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log('Insert character detail view if desired')}>
      <View style={styles.cardContainer}>
        <Image
          style={[styles.showImage, props.styles]}
          source={{
            uri:
              characterData.attributes.image &&
              characterData.attributes.image.original,
          }}
          defaultSource={images[randomCharacterPlaceHolder()]}
        />
        <View style={[props.styles, styles.titleContainer]}>
          <Text style={styles.title}>
            {characterData.attributes.canonicalName}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CharacterCard;

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
