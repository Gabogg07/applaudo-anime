import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class ChapterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {props} = this;
    const {data, navigation} = props;
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log('Insert chapter detail view if desired')}>
        <View style={styles.cardContainer}>
          <Image
            style={[styles.showImage, props.styles]}
            source={{
              uri:
                data.attributes.thumbnail && data.attributes.thumbnail.original,
            }}
          />
          <View style={[props.styles, styles.titleContainer]}>
            <Text style={styles.title}>
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

  return <ChapterCard {...props} navigation={navigation} />;
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'white',
  },
});
