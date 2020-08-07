import React, {Component} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchShowCharacters, fetchCharacterById} from '../../Store/APICalls';
import {cleanShowData} from '../../Store/actions';
import CharacterCard from '../CharacterCard/CharacterCard';
import {fixUrl} from '../../utilities'

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
    const {showId, showType} = this.props;
    this.props.fetchShowCharacters(showId, null, showType);
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
        fixUrl(props.characters.links.next),
        props.showType,
      );
    }
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

  renderEmptyListComponent = (data) => {
    if (!data || data.loading) {
      return (
        <View style={[styles.outerSpinnerContainer, {width}]}>
          <View style={styles.innerSpinnerContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        </View>
      );
    }
    if (data && data.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.title}>
            There was an problem loading the characters
          </Text>
        </View>
      );
    }

    if (data && !data.loading) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.title}> No characters information found</Text>
        </View>
      );
    }

    return null;
  };

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
          ListEmptyComponent={()=>this.renderEmptyListComponent(characters)}
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
  fetchShowCharacters: (showId, url, showType) =>
    dispatch(fetchShowCharacters(showId, url, showType)),
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
  outerSpinnerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerSpinnerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width / 4,
    aspectRatio: 3 / 4,
  },
  errorContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    flex: 1,
  },
});
