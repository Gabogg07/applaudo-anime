import React, {useContext, useEffect} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {fetchShowCharacters, fetchCharacterById} from '../../Store/APICalls';
import {
  changeShowCharactersLoadingState,
  loadShowCharactersSuccess,
  loadShowCharactersError,
  changeSpecificCharacterLoadingState,
  loadSpecificCharacterSuccess,
  loadSpecificCharacterError,
} from '../../Store/actions';
import CharacterCard from '../CharacterCard/CharacterCard';
import {fixUrl} from '../../utilities';
import {ShowsContext} from '../../Store/ShowProvider';

const {width} = Dimensions.get('screen');

/**
 * Component for horizontal listing character cards, it fetches the general list of characters and returns the id to each character card with the
 * function to fetch its own data
 */

function CharacterCardList(props) {
  const [context, dispatch] = useContext(ShowsContext);

  async function fetchCharacters(showId, url, showType) {
    dispatch(changeShowCharactersLoadingState());
    let {response, error} = await fetchShowCharacters(showId, url, showType);
    if (response) {
      dispatch(loadShowCharactersSuccess(response, showType));
    } else {
      dispatch(loadShowCharactersError(error));
    }
  }

  async function fetchSpecificCharacter(url, characterId) {
    dispatch(changeSpecificCharacterLoadingState());
    let {response} = await fetchCharacterById(url);
    if (response) {
      dispatch(loadSpecificCharacterSuccess(response, characterId));
    } else {
      dispatch(loadSpecificCharacterError(characterId));
    }
  }

  //DidMount
  useEffect(() => {
    const {showId, showType} = props;
    fetchCharacters(showId, null, showType);
  }, []);

  const characters = context.characters;

  const onEndReached = () => {
    if (!characters.loading && characters.links.next) {
      fetchCharacters(
        props.showId,
        fixUrl(characters.links.next),
        props.showType,
      );
    }
  };

  const renderEmptyListComponent = (data) => {
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

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={characters.list}
        renderItem={({item: data}) => {
          return (
            <CharacterCard
              styles={{width: width / 4}}
              data={characters.data[data.id]}
              getCharacter={() =>
                fetchSpecificCharacter(data.links.self, data.id)
              }
            />
          );
        }}
        ListEmptyComponent={() => renderEmptyListComponent(characters)}
        onEndReached={onEndReached}
      />
    </View>
  );
}

export default CharacterCardList;

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
