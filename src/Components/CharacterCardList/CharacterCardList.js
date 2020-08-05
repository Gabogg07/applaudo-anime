import React, {Component} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchShowCharacters, fetchCharacterById} from '../../Store/APICalls';
import {cleanShowData} from '../../Store/actions';
import CharacterCard from '../CharacterCard/CharacterCard';

const {width} = Dimensions.get('screen');

class CharacterCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
      listLength: 0,
      enabledLoadMore: false,
    };
  }

  componentDidMount() {
    const {showId} = this.props;
    this.props.fetchShowCharacters(showId);
  }

  onEndReached = () => {
    const {props, state} = this;
    if (
      !props.characters.loading &&
      props.characters.links.next &&
      state.enabledLoadMore
    ) {
      this.props.fetchShowCharacters(
        props.showId,
        this.fixUrl(props.characters.links.next),
      );
    }
  };

  fixUrl = (url) => {
    let url2 = url.split('%5D').join(']');
    let url3 = url2.split('%5B').join('[');
    return url3;
  };

  componentWillUnmount() {
    this.props.cleanShowData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.characters.list &&
      nextProps.characters.list.length !== prevState.listLength
    ) {
      return {
        charactersList: nextProps.characters.list,
        listLength: nextProps.characters.list.length,
        enabledLoadMore: true,
      };
    }

    return null;
  }

  render() {
    const {state, props} = this;
    const {characters} = props;

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={state.charactersList}
          renderItem={({item: data}) => {
            return (
              <CharacterCard
                styles={{width: width / 4}}
                data={characters.data[data.id]}
                getCharacter={() =>
                  props.fetchCharacterById(data.links.self, data.id)
                }
              />
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View style={styles.spinnerContainer}>
                <ActivityIndicator size="large" color="white" />
              </View>
            );
          }}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowCharacters: (showId, url) =>
    dispatch(fetchShowCharacters(showId, url)),
  fetchCharacterById: (url, characterId) =>
    dispatch(fetchCharacterById(url, characterId)),
  cleanShowData: () => dispatch(cleanShowData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardList);

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
    color: 'white',
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width,
  },
});
