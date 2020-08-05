import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.getCharacter();
  }

  render() {
    const {props} = this;
    const {data, navigation} = props;

    if(!props.data || props.data.loading){
      return <View style={{color:'white', height:50, width:50, margin:5}}></View>
    }
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ShowDetail', {showId: data.id})}>
        <View style={styles.cardContainer}>
          <Image
            style={[styles.showImage, props.styles]}
            source={{
              uri: data.attributes.image && data.attributes.image.original,
            }}
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
  },
  titleContainer: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {},
});
